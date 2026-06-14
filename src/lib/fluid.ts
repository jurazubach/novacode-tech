/* =========================================================================
 * Ambient ASCII fluid background — Novacode Tech.
 *
 * A "stable fluids" (Navier–Stokes) GPU solver whose dye + velocity fields
 * are rendered as colored monospace glyphs, tuned to sit behind page content.
 *
 * initFluid(canvas) wires up the simulation against the given <canvas> and
 * returns a cleanup function that removes listeners and cancels the loop.
 * ========================================================================= */

const VERT = `#version 300 es
layout(location = 0) in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAG_ADVECT = `#version 300 es
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;
in vec2 vUv;
out vec4 fragColor;
void main() {
  vec2 vel = texture(uVelocity, vUv).xy;
  vec2 coord = vUv - dt * vel * texelSize;
  fragColor = dissipation * texture(uSource, coord);
}`;

const FRAG_JACOBI = `#version 300 es
precision highp float;
uniform sampler2D uX;
uniform sampler2D uB;
uniform vec2 texelSize;
uniform float alpha;
uniform float rBeta;
in vec2 vUv;
out vec4 fragColor;
void main() {
  vec4 xL = texture(uX, vUv - vec2(texelSize.x, 0.0));
  vec4 xR = texture(uX, vUv + vec2(texelSize.x, 0.0));
  vec4 xB = texture(uX, vUv - vec2(0.0, texelSize.y));
  vec4 xT = texture(uX, vUv + vec2(0.0, texelSize.y));
  vec4 bC = texture(uB, vUv);
  fragColor = (xL + xR + xB + xT + alpha * bC) * rBeta;
}`;

const FRAG_DIVERGENCE = `#version 300 es
precision highp float;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
in vec2 vUv;
out vec4 fragColor;
void main() {
  float L = texture(uVelocity, vUv - vec2(texelSize.x, 0.0)).x;
  float R = texture(uVelocity, vUv + vec2(texelSize.x, 0.0)).x;
  float B = texture(uVelocity, vUv - vec2(0.0, texelSize.y)).y;
  float T = texture(uVelocity, vUv + vec2(0.0, texelSize.y)).y;
  float div = 0.5 * (R - L + T - B);
  fragColor = vec4(div, 0.0, 0.0, 1.0);
}`;

const FRAG_GRADIENT = `#version 300 es
precision highp float;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
in vec2 vUv;
out vec4 fragColor;
void main() {
  float pL = texture(uPressure, vUv - vec2(texelSize.x, 0.0)).x;
  float pR = texture(uPressure, vUv + vec2(texelSize.x, 0.0)).x;
  float pB = texture(uPressure, vUv - vec2(0.0, texelSize.y)).x;
  float pT = texture(uPressure, vUv + vec2(0.0, texelSize.y)).x;
  vec2 vel = texture(uVelocity, vUv).xy;
  vel -= vec2(pR - pL, pT - pB) * 0.5;
  fragColor = vec4(vel, 0.0, 1.0);
}`;

const FRAG_SPLAT = `#version 300 es
precision highp float;
uniform sampler2D uTarget;
uniform vec2 point;
uniform vec3 color;
uniform float radius;
uniform float aspectRatio;
in vec2 vUv;
out vec4 fragColor;
void main() {
  vec2 p = vUv - point;
  p.x *= aspectRatio;
  vec3 splat = exp(-dot(p, p) / radius) * color;
  vec3 base = texture(uTarget, vUv).xyz;
  fragColor = vec4(base + splat, 1.0);
}`;

const FRAG_CLEAR = `#version 300 es
precision highp float;
uniform sampler2D uTexture;
uniform float value;
in vec2 vUv;
out vec4 fragColor;
void main() {
  fragColor = value * texture(uTexture, vUv);
}`;

const FRAG_CURL = `#version 300 es
precision highp float;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
in vec2 vUv;
out vec4 fragColor;
void main() {
  float L = texture(uVelocity, vUv - vec2(texelSize.x, 0.0)).y;
  float R = texture(uVelocity, vUv + vec2(texelSize.x, 0.0)).y;
  float B = texture(uVelocity, vUv - vec2(0.0, texelSize.y)).x;
  float T = texture(uVelocity, vUv + vec2(0.0, texelSize.y)).x;
  fragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
}`;

const FRAG_VORTICITY = `#version 300 es
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 texelSize;
uniform float curl;
uniform float dt;
in vec2 vUv;
out vec4 fragColor;
void main() {
  float L = texture(uCurl, vUv - vec2(texelSize.x, 0.0)).x;
  float R = texture(uCurl, vUv + vec2(texelSize.x, 0.0)).x;
  float B = texture(uCurl, vUv - vec2(0.0, texelSize.y)).x;
  float T = texture(uCurl, vUv + vec2(0.0, texelSize.y)).x;
  float C = texture(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  float len = length(force) + 1e-5;
  force = force / len * curl * C;
  vec2 vel = texture(uVelocity, vUv).xy;
  fragColor = vec4(vel + force * dt, 0.0, 1.0);
}`;

type Uniforms = Record<string, WebGLUniformLocation | null>;
interface Program {
  program: WebGLProgram;
  uniforms: Uniforms;
}
interface FBO {
  texture: WebGLTexture;
  fbo: WebGLFramebuffer;
  width: number;
  height: number;
}
interface DoubleFBO {
  width: number;
  height: number;
  read: FBO;
  write: FBO;
  swap(): void;
}

function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader) ?? "Unknown error";
    gl.deleteShader(shader);
    throw new Error(log);
  }
  return shader;
}

function createProgram(gl: WebGL2RenderingContext, vertSrc: string, fragSrc: string): Program {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program) ?? "Unknown error";
    gl.deleteProgram(program);
    throw new Error(log);
  }
  const uniforms: Uniforms = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
  for (let i = 0; i < count; i++) {
    const info = gl.getActiveUniform(program, i);
    if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return { program, uniforms };
}

function createFBO(
  gl: WebGL2RenderingContext,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  filter: number
): FBO {
  gl.activeTexture(gl.TEXTURE0);
  const texture = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
  const fbo = gl.createFramebuffer()!;
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.viewport(0, 0, w, h);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return { texture, fbo, width: w, height: h };
}

function createDoubleFBO(
  gl: WebGL2RenderingContext,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  filter: number
): DoubleFBO {
  let fbo1 = createFBO(gl, w, h, internalFormat, format, type, filter);
  let fbo2 = createFBO(gl, w, h, internalFormat, format, type, filter);
  return {
    width: w,
    height: h,
    get read() {
      return fbo1;
    },
    get write() {
      return fbo2;
    },
    swap() {
      const t = fbo1;
      fbo1 = fbo2;
      fbo2 = t;
    },
  };
}

interface SimConfig {
  velocityDissipation: number;
  dyeDissipation: number;
  pressureIterations: number;
  pressureClear: number;
  curl: number;
}

class FluidSim {
  gl: WebGL2RenderingContext;
  simW: number;
  simH: number;
  programs!: Record<string, Program>;
  velocity!: DoubleFBO;
  pressure!: DoubleFBO;
  dye!: DoubleFBO;
  divergenceFBO!: FBO;
  curlFBO!: FBO;
  texelSize!: Float32Array;
  dyeBuffer!: Float32Array;
  velBuffer!: Float32Array;

  constructor(canvas: HTMLCanvasElement, simW: number, simH: number) {
    const gl = canvas.getContext("webgl2", { alpha: false, depth: false, stencil: false, antialias: false });
    if (!gl) throw new Error("WebGL2 not supported");
    gl.getExtension("EXT_color_buffer_float");
    gl.getExtension("OES_texture_float_linear");
    this.gl = gl;
    this.simW = simW;
    this.simH = simH;
    canvas.width = simW;
    canvas.height = simH;

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bindVertexArray(gl.createVertexArray());
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    this.programs = {
      advect: createProgram(gl, VERT, FRAG_ADVECT),
      jacobi: createProgram(gl, VERT, FRAG_JACOBI),
      divergence: createProgram(gl, VERT, FRAG_DIVERGENCE),
      gradient: createProgram(gl, VERT, FRAG_GRADIENT),
      splat: createProgram(gl, VERT, FRAG_SPLAT),
      clear: createProgram(gl, VERT, FRAG_CLEAR),
      curl: createProgram(gl, VERT, FRAG_CURL),
      vorticity: createProgram(gl, VERT, FRAG_VORTICITY),
    };
    this.allocate(simW, simH);
  }

  deleteFBO(f: FBO) {
    this.gl.deleteTexture(f.texture);
    this.gl.deleteFramebuffer(f.fbo);
  }

  /** Free all GPU resources from a previous allocation (prevents leaks on resize). */
  disposeResources() {
    if (!this.velocity) return;
    const d = (df: DoubleFBO) => {
      this.deleteFBO(df.read);
      this.deleteFBO(df.write);
    };
    d(this.velocity);
    d(this.pressure);
    d(this.dye);
    this.deleteFBO(this.divergenceFBO);
    this.deleteFBO(this.curlFBO);
  }

  allocate(w: number, h: number) {
    const gl = this.gl;
    this.disposeResources(); // release any previously-allocated FBOs first
    const type = gl.HALF_FLOAT,
      internal = gl.RGBA16F,
      format = gl.RGBA,
      filter = gl.LINEAR;
    this.velocity = createDoubleFBO(gl, w, h, internal, format, type, filter);
    this.pressure = createDoubleFBO(gl, w, h, internal, format, type, filter);
    this.dye = createDoubleFBO(gl, w, h, internal, format, type, filter);
    this.divergenceFBO = createFBO(gl, w, h, internal, format, type, filter);
    this.curlFBO = createFBO(gl, w, h, internal, format, type, filter);
    this.texelSize = new Float32Array([1 / w, 1 / h]);
    this.dyeBuffer = new Float32Array(w * h * 4);
    this.velBuffer = new Float32Array(w * h * 4);
  }

  blit(target: FBO | null) {
    const gl = this.gl;
    if (target) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      gl.viewport(0, 0, target.width, target.height);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, this.simW, this.simH);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  bindTexture(unit: number, texture: WebGLTexture) {
    const gl = this.gl;
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
  }

  splat(x: number, y: number, vx: number, vy: number, r: number, g: number, b: number, radius: number) {
    const gl = this.gl,
      p = this.programs.splat;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.point, x, y);
    gl.uniform1f(p.uniforms.radius, radius);
    gl.uniform1f(p.uniforms.aspectRatio, this.simW / this.simH);

    this.bindTexture(0, this.velocity.read.texture);
    gl.uniform1i(p.uniforms.uTarget, 0);
    gl.uniform3f(p.uniforms.color, vx, vy, 0);
    this.blit(this.velocity.write);
    this.velocity.swap();

    this.bindTexture(0, this.dye.read.texture);
    gl.uniform1i(p.uniforms.uTarget, 0);
    gl.uniform3f(p.uniforms.color, r, g, b);
    this.blit(this.dye.write);
    this.dye.swap();
  }

  step(dt: number, cfg: SimConfig) {
    this.computeCurl();
    this.applyVorticity(dt, cfg.curl);
    this.advect(this.velocity, this.velocity, dt, cfg.velocityDissipation);
    this.advect(this.velocity, this.dye, dt, cfg.dyeDissipation);
    this.computeDivergence();
    this.clearPressure(cfg.pressureClear);
    this.solvePressure(cfg.pressureIterations);
    this.subtractGradient();
  }

  computeCurl() {
    const gl = this.gl,
      p = this.programs.curl;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.texelSize, this.texelSize[0], this.texelSize[1]);
    this.bindTexture(0, this.velocity.read.texture);
    gl.uniform1i(p.uniforms.uVelocity, 0);
    this.blit(this.curlFBO);
  }

  applyVorticity(dt: number, curl: number) {
    const gl = this.gl,
      p = this.programs.vorticity;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.texelSize, this.texelSize[0], this.texelSize[1]);
    this.bindTexture(0, this.velocity.read.texture);
    gl.uniform1i(p.uniforms.uVelocity, 0);
    this.bindTexture(1, this.curlFBO.texture);
    gl.uniform1i(p.uniforms.uCurl, 1);
    gl.uniform1f(p.uniforms.curl, curl);
    gl.uniform1f(p.uniforms.dt, dt);
    this.blit(this.velocity.write);
    this.velocity.swap();
  }

  advect(velField: DoubleFBO, source: DoubleFBO, dt: number, dissipation: number) {
    const gl = this.gl,
      p = this.programs.advect;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.texelSize, this.texelSize[0], this.texelSize[1]);
    gl.uniform1f(p.uniforms.dt, dt);
    gl.uniform1f(p.uniforms.dissipation, dissipation);
    this.bindTexture(0, velField.read.texture);
    gl.uniform1i(p.uniforms.uVelocity, 0);
    this.bindTexture(1, source.read.texture);
    gl.uniform1i(p.uniforms.uSource, 1);
    this.blit(source.write);
    source.swap();
  }

  computeDivergence() {
    const gl = this.gl,
      p = this.programs.divergence;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.texelSize, this.texelSize[0], this.texelSize[1]);
    this.bindTexture(0, this.velocity.read.texture);
    gl.uniform1i(p.uniforms.uVelocity, 0);
    this.blit(this.divergenceFBO);
  }

  clearPressure(value: number) {
    const gl = this.gl,
      p = this.programs.clear;
    gl.useProgram(p.program);
    this.bindTexture(0, this.pressure.read.texture);
    gl.uniform1i(p.uniforms.uTexture, 0);
    gl.uniform1f(p.uniforms.value, value);
    this.blit(this.pressure.write);
    this.pressure.swap();
  }

  solvePressure(iterations: number) {
    const gl = this.gl,
      p = this.programs.jacobi;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.texelSize, this.texelSize[0], this.texelSize[1]);
    gl.uniform1f(p.uniforms.alpha, -1);
    gl.uniform1f(p.uniforms.rBeta, 0.25);
    this.bindTexture(1, this.divergenceFBO.texture);
    gl.uniform1i(p.uniforms.uB, 1);
    for (let i = 0; i < iterations; i++) {
      this.bindTexture(0, this.pressure.read.texture);
      gl.uniform1i(p.uniforms.uX, 0);
      this.blit(this.pressure.write);
      this.pressure.swap();
    }
  }

  subtractGradient() {
    const gl = this.gl,
      p = this.programs.gradient;
    gl.useProgram(p.program);
    gl.uniform2f(p.uniforms.texelSize, this.texelSize[0], this.texelSize[1]);
    this.bindTexture(0, this.pressure.read.texture);
    gl.uniform1i(p.uniforms.uPressure, 0);
    this.bindTexture(1, this.velocity.read.texture);
    gl.uniform1i(p.uniforms.uVelocity, 1);
    this.blit(this.velocity.write);
    this.velocity.swap();
  }

  readDye() {
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.dye.read.fbo);
    gl.readPixels(0, 0, this.simW, this.simH, gl.RGBA, gl.FLOAT, this.dyeBuffer);
    return this.dyeBuffer;
  }

  readVelocity() {
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.velocity.read.fbo);
    gl.readPixels(0, 0, this.simW, this.simH, gl.RGBA, gl.FLOAT, this.velBuffer);
    return this.velBuffer;
  }

  resize(w: number, h: number) {
    this.simW = w;
    this.simH = h;
    this.gl.canvas.width = w;
    this.gl.canvas.height = h;
    this.allocate(w, h);
  }
}

const RAMP = " .·:;¡+=xX$#%@";
const RAMP_MAX = RAMP.length - 1;

class AsciiRenderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  fontSize = 14;
  screenW = 0;
  screenH = 0;
  cellW = 8;
  cellH = 16;
  cols = 0;
  rows = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas 2D context not available");
    this.ctx = ctx;
    this.measure();
  }

  measure() {
    const dpr = window.devicePixelRatio || 1;
    this.screenW = window.innerWidth;
    this.screenH = window.innerHeight;
    this.canvas.width = this.screenW * dpr;
    this.canvas.height = this.screenH * dpr;
    this.canvas.style.width = this.screenW + "px";
    this.canvas.style.height = this.screenH + "px";
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.ctx.font = `${this.fontSize}px "Courier New", Courier, monospace`;
    this.ctx.textBaseline = "top";
    this.cellW = this.ctx.measureText("█").width;
    this.cellH = this.fontSize * 1.2;
    this.cols = Math.floor(this.screenW / this.cellW);
    this.rows = Math.floor(this.screenH / this.cellH);
    return { cols: this.cols, rows: this.rows };
  }

  draw(dye: Float32Array, vel: Float32Array, cols: number, rows: number) {
    const { ctx, cellW, cellH } = this;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, this.screenW, this.screenH);
    ctx.font = `${this.fontSize}px "Courier New", Courier, monospace`;
    ctx.textBaseline = "top";

    let lastColor = "";
    for (let row = 0; row < this.rows; row++) {
      const simRow = this.rows - 1 - row; // flip: WebGL origin is bottom-left
      if (simRow < 0 || simRow >= rows) continue;
      const rowOffset = simRow * cols;
      const py = row * cellH;
      for (let col = 0; col < this.cols; col++) {
        if (col >= cols) continue;
        const idx = (rowOffset + col) * 4;
        const dr = dye[idx],
          dg = dye[idx + 1],
          db = dye[idx + 2];
        const density = Math.sqrt(dr * dr + dg * dg + db * db);
        if (density < 0.02) continue;

        const vx = vel[idx],
          vy = vel[idx + 1];
        const speed = Math.sqrt(vx * vx + vy * vy);

        const ramped = Math.min(1, density * 0.4);
        const charIdx = Math.max(1, Math.min(RAMP_MAX, Math.round(ramped * RAMP_MAX)));
        const glyph = RAMP[charIdx];

        const hue = ((Math.atan2(vy, vx) * 180) / Math.PI + 360) % 360;
        const sat = Math.min(100, 60 + speed * 100);
        const light = Math.min(80, 20 + density * 20 + speed * 10);
        const color = `hsl(${hue}, ${sat}%, ${light}%)`;

        if (color !== lastColor) {
          ctx.fillStyle = color;
          lastColor = color;
        }
        ctx.fillText(glyph, col * cellW, py);
      }
    }
  }
}

// Tuned for an ambient background — same engine, a touch calmer than the demo.
const CFG: SimConfig & { splatRadius: number; splatForce: number; splatDyeStrength: number; clickMultiplier: number } = {
  velocityDissipation: 0.985,
  dyeDissipation: 0.968,
  pressureIterations: 22,
  pressureClear: 0.8,
  curl: 26,
  splatRadius: 0.0028,
  splatForce: 3200,
  splatDyeStrength: 1.7,
  clickMultiplier: 2,
};
const RIPPLE_WAVES = 5;
const RIPPLE_POINTS = 20;
const RIPPLE_WAVE_DELAY = 100;
const RIPPLE_RADIUS_STEP = 0.055;
const RIPPLE_FORCE_BASE = 0.004;
const RIPPLE_FORCE = 7000;
const RIPPLE_SPLAT_RADIUS = 8e-4;
const RIPPLE_DYE_STRENGTH = 1.6;
const IDLE_AFTER = 2200;
const IDLE_INTERVAL = 900;

function randomColor() {
  const hue = Math.random();
  const a = 0.5 * Math.min(0.5, 0.5);
  const f = (n: number) => {
    const k = (n + hue * 12) % 12;
    return 0.5 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return { r: f(0), g: f(8), b: f(4) };
}

interface PendingSplat {
  x: number;
  y: number;
  dx: number;
  dy: number;
  down?: boolean;
  ripple?: boolean;
}

/** Wire up the ambient fluid against a canvas. Returns a cleanup function. */
export function initFluid(asciiCanvas: HTMLCanvasElement): () => void {
  // Respect users who ask for less motion — skip the animation entirely.
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  let ascii: AsciiRenderer;
  try {
    ascii = new AsciiRenderer(asciiCanvas);
  } catch (e) {
    console.error(e);
    return () => {};
  }
  let { cols, rows } = ascii.measure();

  const glCanvas = document.createElement("canvas");
  let fluid: FluidSim;
  try {
    fluid = new FluidSim(glCanvas, cols, rows);
  } catch (e) {
    // No WebGL2 — leave a plain black background, the site still works.
    console.warn("Ambient fluid disabled:", (e as Error).message);
    return () => {};
  }

  let pending: PendingSplat[] = [];
  const rippleTimers: number[] = [];
  let lastInput = performance.now();
  let lastIdle = performance.now();
  let rafId = 0;

  function spawnRipple(x: number, y: number) {
    for (let wave = 0; wave < RIPPLE_WAVES; wave++) {
      const timer = window.setTimeout(() => {
        const radius = (wave + 1) * RIPPLE_RADIUS_STEP;
        const falloff = 1 - (wave / RIPPLE_WAVES) * 0.6;
        const dir = wave % 2 === 0 ? 1 : -0.5;
        const force = RIPPLE_FORCE_BASE * falloff * dir;
        for (let i = 0; i < RIPPLE_POINTS; i++) {
          const angle = (i / RIPPLE_POINTS) * Math.PI * 2;
          const cos = Math.cos(angle),
            sin = Math.sin(angle);
          pending.push({ x: x + cos * radius, y: y + sin * radius, dx: cos * force, dy: sin * force, ripple: true });
        }
      }, wave * RIPPLE_WAVE_DELAY);
      rippleTimers.push(timer);
    }
  }

  let prevX = 0,
    prevY = 0,
    firstMove = true,
    isDown = false;

  const onPointerMove = (e: PointerEvent) => {
    lastInput = performance.now();
    const nx = e.clientX / window.innerWidth;
    const ny = e.clientY / window.innerHeight;
    if (firstMove) {
      firstMove = false;
      prevX = nx;
      prevY = ny;
      return;
    }
    const dx = nx - prevX,
      dy = ny - prevY;
    prevX = nx;
    prevY = ny;
    pending.push({ x: nx, y: 1 - ny, dx, dy: -dy, down: isDown });
  };

  const onPointerDown = (e: PointerEvent) => {
    lastInput = performance.now();
    isDown = true;
    const nx = e.clientX / window.innerWidth;
    const ny = e.clientY / window.innerHeight;
    prevX = nx;
    prevY = ny;
    spawnRipple(nx, 1 - ny);
  };

  const onPointerUp = () => {
    isDown = false;
  };

  const onResize = () => {
    const m = ascii.measure();
    if (m.cols !== cols || m.rows !== rows) {
      cols = m.cols;
      rows = m.rows;
      fluid.resize(cols, rows);
    }
  };

  let idleAngle = 0.7;
  function idleDrift(now: number) {
    idleAngle += 0.6 + Math.sin(now * 0.0004) * 0.5;
    const cx = 0.5 + Math.cos(idleAngle) * 0.32;
    const cy = 0.5 + Math.sin(idleAngle * 0.7) * 0.28;
    const dirX = Math.cos(idleAngle * 1.3);
    const dirY = Math.sin(idleAngle * 1.1);
    const c = randomColor();
    const force = 900,
      dye = 0.9,
      radius = 0.0026;
    fluid.splat(cx, cy, dirX * force, dirY * force, c.r * dye, c.g * dye, c.b * dye, radius);
  }

  let lastTime = performance.now();
  function frame(now: number) {
    rafId = requestAnimationFrame(frame);
    const dt = Math.min((now - lastTime) / 1000, 0.033);
    lastTime = now;

    // Self-heal if the canvas was first measured at zero size (e.g. mounted
    // before layout). Once the viewport has real dimensions, re-measure.
    if ((cols === 0 || rows === 0) && window.innerWidth > 0) onResize();

    if (now - lastInput > IDLE_AFTER && now - lastIdle > IDLE_INTERVAL) {
      idleDrift(now);
      lastIdle = now;
    }

    for (const s of pending) {
      let force: number, radius: number, dyeStrength: number;
      if (s.ripple) {
        force = RIPPLE_FORCE;
        radius = RIPPLE_SPLAT_RADIUS;
        dyeStrength = RIPPLE_DYE_STRENGTH;
      } else {
        const mult = s.down ? CFG.clickMultiplier : 1;
        force = CFG.splatForce * mult;
        radius = CFG.splatRadius * mult;
        dyeStrength = CFG.splatDyeStrength * mult;
      }
      const c = randomColor();
      fluid.splat(s.x, s.y, s.dx * force, s.dy * force, c.r * dyeStrength, c.g * dyeStrength, c.b * dyeStrength, radius);
    }
    pending = [];

    fluid.step(dt, CFG);
    const dye = fluid.readDye();
    const vel = fluid.readVelocity();
    ascii.draw(dye, vel, cols, rows);
  }

  // Explicitly stop the loop when the tab is hidden (saves battery/GPU; rAF
  // already throttles background tabs, but webviews vary). Resume on return.
  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    } else if (rafId === 0) {
      lastTime = performance.now();
      rafId = requestAnimationFrame(frame);
    }
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerDown, { passive: true });
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  window.addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", onVisibility);
  rafId = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(rafId);
    rippleTimers.forEach((t) => clearTimeout(t));
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerUp);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibility);
    // Release GPU resources and the WebGL context so a remount (incl. React
    // StrictMode's dev double-invoke) doesn't accumulate orphaned contexts.
    fluid.disposeResources();
    fluid.gl.getExtension("WEBGL_lose_context")?.loseContext();
  };
}
