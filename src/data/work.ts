import {
  SiTypescript, SiClaude, SiNodedotjs, SiXstate, SiGreensock, SiSpine,
  SiNx, SiPostgresql, SiFastify, SiRedis,
} from "react-icons/si";
import type { StackItem } from "./stack";

/** Tech stack per flagship project — rendered as an icon marquee on the card. */
export const FLAGSHIP_STACKS: Record<string, StackItem[]> = {
  f1: [
    { name: "Phaser", mono: "Ph" },
    { name: "XState", Icon: SiXstate },
    { name: "GSAP", Icon: SiGreensock },
    { name: "Spine", Icon: SiSpine },
    { name: "Nx", Icon: SiNx },
    { name: "Rspack", mono: "Rs" },
    { name: "TypeScript", Icon: SiTypescript },
  ],
  f2: [
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Claude", Icon: SiClaude },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Ink", mono: "Ik" },
    { name: "Monte Carlo", mono: "MC" },
  ],
  f3: [
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Claude", Icon: SiClaude },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "pgvector", mono: "pg" },
    { name: "BullMQ", mono: "Bq" },
    { name: "Fastify", Icon: SiFastify },
    { name: "Redis", Icon: SiRedis },
  ],
};
