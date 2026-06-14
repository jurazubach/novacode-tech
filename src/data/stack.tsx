import type { ComponentType } from "react";
import {
  SiReact, SiTypescript, SiRedux, SiReduxsaga, SiMui, SiStyledcomponents, SiReactivex, SiI18Next,
  SiXstate, SiGreensock, SiSpine,
  SiNodedotjs, SiNestjs, SiPhp, SiSymfony, SiRedis, SiPostgresql, SiMysql, SiRabbitmq, SiElasticsearch, SiDocker, SiGraphql,
  SiClaude, SiFastify,
  SiNx, SiWebpack, SiVitest, SiJest, SiPuppeteer, SiPm2, SiNginx,
} from "react-icons/si";
import type { TKey } from "../i18n/dict";

export interface StackItem {
  name: string;
  /** react-icons logo; when absent, a lettered monogram is shown instead. */
  Icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  /** monogram fallback text (for tech without a brand icon) */
  mono?: string;
}

export interface StackGroup {
  titleKey: TKey;
  items: StackItem[];
}

export const STACK: StackGroup[] = [
  {
    titleKey: "expertise.stack.frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Redux", Icon: SiRedux },
      { name: "Redux-Saga", Icon: SiReduxsaga },
      { name: "MUI", Icon: SiMui },
      { name: "Styled Components", Icon: SiStyledcomponents },
      { name: "RxJS", Icon: SiReactivex },
      { name: "i18next", Icon: SiI18Next },
    ],
  },
  {
    titleKey: "expertise.stack.games",
    items: [
      { name: "Phaser", mono: "Ph" },
      { name: "XState", Icon: SiXstate },
      { name: "GSAP", Icon: SiGreensock },
      { name: "Spine", Icon: SiSpine },
    ],
  },
  {
    titleKey: "expertise.stack.backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "PHP", Icon: SiPhp },
      { name: "Symfony", Icon: SiSymfony },
      { name: "GraphQL", Icon: SiGraphql },
      { name: "Redis", Icon: SiRedis },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "RabbitMQ", Icon: SiRabbitmq },
      { name: "Elasticsearch", Icon: SiElasticsearch },
      { name: "Docker", Icon: SiDocker },
    ],
  },
  {
    titleKey: "expertise.stack.ai",
    items: [
      { name: "Claude", Icon: SiClaude },
      { name: "Fastify", Icon: SiFastify },
      { name: "Redis", Icon: SiRedis },
      { name: "pgvector", mono: "pg" },
    ],
  },
  {
    titleKey: "expertise.stack.tooling",
    items: [
      { name: "Nx", Icon: SiNx },
      { name: "Rspack", mono: "Rs" },
      { name: "Webpack", Icon: SiWebpack },
      { name: "Vitest", Icon: SiVitest },
      { name: "Jest", Icon: SiJest },
      { name: "Puppeteer", Icon: SiPuppeteer },
      { name: "pm2", Icon: SiPm2 },
      { name: "NGINX", Icon: SiNginx },
    ],
  },
];
