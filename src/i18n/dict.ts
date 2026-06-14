/* =========================================================================
 * EN / SK dictionaries. `sk` is typed as Record<TKey, string>, so the
 * compiler refuses to build if a key is missing or misspelled in Slovak.
 * ========================================================================= */

export const en = {
  "meta.brand": "Novacode Tech",

  "nav.home": "Home",
  "nav.services": "Services",
  "nav.expertise": "Expertise",
  "nav.work": "Work",
  "nav.contact": "Contact",
  "nav.menu": "Menu",

  "cta.contact": "Start a project",
  "cta.services": "What we build",

  // ---- Home ----
  "home.title": "Novacode Tech — Software studio · Bratislava",
  "home.hero.kicker": "Novacode Tech s.r.o. · Bratislava, Slovakia",
  "home.hero.title": "High-load web platforms and the game engine behind them.",
  "home.hero.lead":
    "Novacode Tech is a boutique software studio. We build production systems end-to-end — React frontends that stay fast under load, Node.js and PHP services behind them, and real-time HTML5 game engines running in regulated markets. Ten years of shipping, not slides.",
  "home.hero.note": "Move your mouse to stir the background · click to ripple",

  "home.stats.experience": "years shipping production software",
  "home.stats.markets": "regulated markets in production",
  "home.stats.packages": "package game-engine monorepo",
  "home.stats.crm": "CRM & analytics platforms built",

  "home.what.kicker": "What we do",
  "home.what.title": "One engineer across the whole stack.",
  "home.what.lead":
    "A better game developer than most platform engineers, and a better platform engineer than most game developers — so the frontend, the services behind it, and the engine that renders it all come from one place.",

  "home.card.web.title": "High-load web platforms",
  "home.card.web.text":
    "React applications that hold up under real traffic: CRM and promo engines, real-time analytics dashboards, B2B partner portals.",
  "home.card.game.title": "HTML5 game engines",
  "home.card.game.text":
    "Slot games on a modular Phaser engine where the spin lifecycle is a deterministic XState statechart, with Spine and GSAP driving animation.",
  "home.card.backend.title": "Backend & APIs",
  "home.card.backend.text":
    "Node.js / NestJS and PHP services, BFF layers, and contract validation with inheritable JSON schemas.",
  "home.card.ai.title": "AI tooling that does real work",
  "home.card.ai.text":
    "Claude-driven agent pipelines applied to hard domains — auditing slot-game math, modeling causal chains in financial news.",

  "home.cta.title": "Have a platform or a game to build?",
  "home.cta.text": "Tell me what you're working on — I reply fast.",

  // ---- Services ----
  "services.title": "Services — Novacode Tech",
  "services.hero.kicker": "Services",
  "services.hero.title": "What we build for you.",
  "services.hero.lead":
    "Engagements range from one hard frontend problem to architecting and delivering a whole platform. Every line is production-minded: typed, tested, observable, and built to survive contact with real users.",

  "services.s1.title": "High-load web platforms",
  "services.s1.text":
    "Business-critical applications where performance and correctness are the requirement, not a nice-to-have.",
  "services.s1.li1": "CRM & promo-management systems (tournaments, races, free spins, prize mechanics)",
  "services.s1.li2": "Real-time analytics dashboards for commercial and technical teams",
  "services.s1.li3": "B2B partner portals with client performance tracking",
  "services.s1.li4": "React 18, Redux / Redux-Saga, Reselect, Immutable.js, MUI, SSR",

  "services.s2.title": "HTML5 game engines",
  "services.s2.text":
    "Browser games engineered like software products — deterministic, debuggable, and certifiable for regulated markets.",
  "services.s2.li1": "Slot games on a modular Phaser engine",
  "services.s2.li2": "Spin lifecycle modeled as XState statecharts — no race conditions, recoverable mid-session",
  "services.s2.li3": "Spine skeletal animation unified with GSAP timelines",
  "services.s2.li4": "Custom in-browser debug & performance tooling",

  "services.s3.title": "Backend & API infrastructure",
  "services.s3.text": "The services and contracts behind the product — designed for reliability and clean integration.",
  "services.s3.li1": "Node.js & NestJS microservices; PHP / Symfony where it fits",
  "services.s3.li2": "BFF layers and API aggregation",
  "services.s3.li3": "Contract validation & mock servers from inheritable JSON schemas",
  "services.s3.li4": "Redis, PostgreSQL, RabbitMQ, Elasticsearch, Docker",

  "services.s4.title": "AI tooling & automation",
  "services.s4.text":
    "LLM agents pointed at real engineering problems — not chatbots, but pipelines that produce verifiable output.",
  "services.s4.li1": "Multi-agent Claude pipelines (Opus / Sonnet) with tool use",
  "services.s4.li2": "Domain analysis, code review and codegen automation",
  "services.s4.li3": "Cost-tracked, resumable, reproducible agent runs",
  "services.s4.li4": "Embeddings, pgvector, RAG where it earns its place",

  "services.s5.title": "Architecture & dev tooling",
  "services.s5.text": "Foundations that keep a large codebase shippable as the team and surface grow.",
  "services.s5.li1": "Nx monorepos with 60+ modular packages",
  "services.s5.li2": "Internal developer tools, asset pipelines, codegen",
  "services.s5.li3": "Real-time performance analysis & profiling",
  "services.s5.li4": "Testable, CI-friendly module boundaries",

  "services.s6.title": "Mobile & mentoring",
  "services.s6.text": "Cross-platform mobile on the same React foundations, plus senior mentoring and reviews.",
  "services.s6.li1": "React Native for iOS & Android (camera, video, GraphQL)",
  "services.s6.li2": "Former React mentor at HTML Academy",
  "services.s6.li3": "Architecture reviews & frontend performance audits",

  // ---- Expertise / About ----
  "expertise.title": "Expertise — Novacode Tech",
  "expertise.hero.kicker": "About & expertise",
  "expertise.hero.title": "A decade across frontend, backend and game engines.",
  "expertise.hero.lead":
    "Novacode Tech is founded and run by Yurii Zubach — a hands-on full-stack & game developer currently building a real-time game engine for a leading iGaming operator.",

  "about.title": "About",
  "about.p1":
    "I'm Yurii Zubach — a hands-on full-stack and game developer, and the person behind Novacode Tech. I've spent about ten years shipping production software: high-load React frontends, Node.js and PHP backends, and, for the last three years, a real-time game engine running in regulated markets.",
  "about.p2":
    "I like the seam between two worlds that rarely overlap. I'm a better game developer than most platform engineers, and a better platform engineer than most game developers — so I'm equally at home writing the statechart that drives a slot spin in the morning and the service that validates its contracts in the afternoon.",
  "about.p3":
    "In practice that has meant: three CRM and analytics platforms for live promotional mechanics; an ERP for a US retail chain; full e-commerce platforms and an online-banking frontend for a major bank; backends in Node.js and PHP; and core engineering on a 60+ package game-engine monorepo. Lately a lot of my time goes into AI tooling — Claude-driven agents that do real work, from auditing game math to building causal models of financial news.",
  "about.p4":
    "Novacode is a one-person studio on purpose. You work directly with the engineer making the decisions, not a layer above them. If you've got something hard to build, I'd like to hear about it.",

  "expertise.stack.title": "Core stack",
  "expertise.stack.frontend": "Frontend",
  "expertise.stack.frontendList":
    "React 16–18 · Redux · Redux-Saga · Reselect · Recompose · Immutable.js · MUI · Styled Components · SSR · i18next",
  "expertise.stack.games": "Games",
  "expertise.stack.gamesList": "Phaser 3 · Phaser Editor · XState 5 · Spine · GSAP · RxJS",
  "expertise.stack.backend": "Backend",
  "expertise.stack.backendList":
    "Node.js · NestJS · HapiJS · PHP / Symfony · Redis · PostgreSQL · MySQL · RabbitMQ · Elasticsearch · Docker",
  "expertise.stack.ai": "AI & data",
  "expertise.stack.aiList": "Claude (Opus / Sonnet) · agent pipelines · embeddings · pgvector · BullMQ · Fastify",
  "expertise.stack.tooling": "Architecture & tooling",
  "expertise.stack.toolingList": "Nx monorepo · Rspack · Webpack · TypeScript · Jest · Vitest · Puppeteer · pm2 · NGINX",

  "expertise.timeline.title": "Track record",

  "exp.playson.role": "Full-stack & Game Developer — iGaming (current)",
  "exp.playson.period": "Sep 2021 – present",
  "exp.playson.text":
    "Building high-load systems for a leading iGaming operator. Three CRM and analytics platforms for promo mechanics, real-time insights and B2B partners (React 18). Node.js / NestJS microservices with contract validation from inheritable JSON schemas. Core developer of a next-generation slot engine — a 60+ package Nx monorepo on Phaser with an XState spin lifecycle — plus the in-browser developer tooling the team ships with.",

  "exp.htmlacademy.role": "React Mentor — HTML Academy",
  "exp.htmlacademy.period": "Sep 2020 – Feb 2022",
  "exp.htmlacademy.text":
    "Mentored students through “React: Complex Client Applications” — React, Redux, Reselect, testing and Webpack.",

  "exp.signnow.role": "Full-stack Developer — signNow (airSlate)",
  "exp.signnow.period": "Mar 2020 – Sep 2021",
  "exp.signnow.text":
    "Electronic-signature product. Frontend plus API service aggregation and backend request handling on Node.js / HapiJS, React / Redux, Docker.",

  "exp.luxoft.role": "Frontend Developer — Luxoft",
  "exp.luxoft.period": "Jul 2019 – Mar 2020",
  "exp.luxoft.text":
    "Online-banking platform for entrepreneurs at a major bank. React, Redux, Recompose, Reselect, i18next — multilingual and reliability-first.",

  "exp.leboutique.role": "Full-stack Developer — LeBoutique",
  "exp.leboutique.period": "Dec 2018 – Jul 2019",
  "exp.leboutique.text":
    "E-commerce platform with an SSR React frontend and a PHP / Symfony backend behind NGINX, Redis, RabbitMQ and Elasticsearch.",

  "exp.updg.role": "Frontend & Mobile Developer — UPDG",
  "exp.updg.period": "Aug 2018 – Jul 2019",
  "exp.updg.text":
    "Shipped an internal ERP for a US retail chain (React, Apollo/GraphQL, Recharts), a React Native driver app, and an iOS/Android video Q&A app.",

  "exp.bvblogic.role": "Full-stack Developer — bvblogic",
  "exp.bvblogic.period": "Feb 2016 – Jul 2018",
  "exp.bvblogic.text":
    "Worked on one of Ukraine's larger e-commerce shops — PHP / Yii, Redis, MySQL, Elasticsearch, jQuery.",

  // ---- Work ----
  "work.title": "Work — Novacode Tech",
  "work.hero.kicker": "Selected work",
  "work.hero.title": "Things we've built.",
  "work.hero.lead":
    "Three projects I'm proud of, described in enough detail to be real. Client-specific mechanics stay confidential — the architecture doesn't.",

  "work.flagship.title": "Flagship projects",

  "work.f1.tag": "iGaming · Game engine · 3 years",
  "work.f1.title": "Next-generation slot-game engine",
  "work.f1.text":
    "Core engineer on a next-gen slot engine for a leading iGaming operator — three years and counting. It's a 60+ package Nx / TypeScript monorepo on Phaser, where the entire spin lifecycle is modeled as a three-level XState statechart hierarchy: deterministic, free of race conditions, and recoverable mid-session — which is exactly what a regulated game has to guarantee. Animation lives in a fluent GSAP timeline layer that unifies tweens, Spine skeletal animation and component state in one declarative API. I also built the in-browser debug tooling — live statechart inspection, GSAP timeline scrubbing, prefab-pool memory profiling — that the whole team uses to ship new titles.",
  "work.f1.stack": "Phaser 3 · XState 5 · GSAP · Spine · Nx · Rspack · TypeScript",

  "work.f2.tag": "iGaming · AI tooling",
  "work.f2.title": "AI copilot for game mathematicians",
  "work.f2.text":
    "A TypeScript CLI — with a React/Ink terminal UI — that wraps the entire slot-math workflow: scaffold a model, run Monte Carlo simulations of up to 100M spins across worker threads, and analyze RTP, volatility and hit-frequency. The part I'm proudest of is the agent layer: chained Claude (Opus / Sonnet) pipelines that reverse-engineer an existing game's RTP budget into reusable, documented “skills”, then audit new math against 60+ correctness and compliance checks. It turns a multi-day manual certification review into a repeatable, resumable, cost-tracked pipeline.",
  "work.f2.stack": "TypeScript · Claude (Opus/Sonnet) · Ink · Monte Carlo · Node.js worker threads",

  "work.f3.tag": "R&D · Markets intelligence",
  "work.f3.title": "Mantis — news-driven trading signals",
  "work.f3.text":
    "An in-house R&D platform that turns financial news into trading signals. It ingests 30+ institutional, crypto and macro sources, then runs an eight-stage pipeline: normalize → deduplicate (Redis + pgvector embeddings) → classify and extract entities with Claude → ensemble sentiment → causal-chain reasoning that models two to three levels of probable consequences per event. Related events cluster into consensus-scored signals, weighted across eight source-quality dimensions, and a closed feedback loop scores every signal against realized 1h / 4h / 24h price moves using immutable anchors — so the system measures whether it was actually right, not whether it merely sounded confident.",
  "work.f3.stack": "TypeScript · Claude · PostgreSQL + pgvector · BullMQ · Fastify · Redis",

  "work.more.title": "More work",
  "work.m1.tag": "iGaming · Frontend",
  "work.m1.title": "Promo management CRM",
  "work.m1.text": "Live promotional mechanics — tournaments, races, free spins, prize wheels — across a high-load casino product.",
  "work.m2.tag": "iGaming · Analytics",
  "work.m2.title": "Real-time analytics dashboard",
  "work.m2.text": "Live data turned into strategic dashboards for commercial and technical teams.",
  "work.m3.tag": "iGaming · B2B",
  "work.m3.title": "B2B partner portal",
  "work.m3.text": "Analytics portal where partners track client performance, on the same high-load React foundation.",
  "work.m4.tag": "Fintech · Banking",
  "work.m4.title": "Online banking for entrepreneurs",
  "work.m4.text": "Multilingual, reliability-first frontend for a business-banking platform at a major bank.",
  "work.m5.tag": "E-commerce",
  "work.m5.title": "High-traffic online shops",
  "work.m5.text": "SSR React frontends over queue-backed PHP services and Elasticsearch search, on large e-commerce platforms.",
  "work.m6.tag": "Mobile · React Native",
  "work.m6.title": "Cross-platform mobile apps",
  "work.m6.text": "A driver app and a video Q&A app for iOS and Android — camera, video, GraphQL.",

  // ---- Contact ----
  "contact.title": "Contact — Novacode Tech",
  "contact.hero.kicker": "Contact",
  "contact.hero.title": "Let's build something.",
  "contact.hero.lead": "Tell me about your platform, game or hard frontend problem. I reply quickly.",
  "contact.email.label": "Email",
  "contact.linkedin.label": "LinkedIn",
  "contact.telegram.label": "Telegram",
  "contact.button": "Write me an email",

  "contact.company.title": "Company details",
  "contact.company.name": "Legal name",
  "contact.company.ico": "Company ID (IČO)",
  "contact.company.dic": "Tax ID (DIČ)",
  "contact.company.vat": "VAT ID",
  "contact.company.form": "Legal form",
  "contact.company.formValue": "Limited liability company (s.r.o.)",
  "contact.company.seat": "Registered seat",
  "contact.company.reg": "Registration",
  "contact.company.regValue":
    "Commercial Register, Municipal Court Bratislava III · Section Sro, Entry 187106/B",

  "footer.built": "Built in Bratislava.",
} as const;

export type TKey = keyof typeof en;
export type Lang = "en" | "sk";

export const sk: Record<TKey, string> = {
  "meta.brand": "Novacode Tech",

  "nav.home": "Domov",
  "nav.services": "Služby",
  "nav.expertise": "Expertíza",
  "nav.work": "Projekty",
  "nav.contact": "Kontakt",
  "nav.menu": "Menu",

  "cta.contact": "Začať projekt",
  "cta.services": "Čo staviame",

  // ---- Home ----
  "home.title": "Novacode Tech — Softvérové štúdio · Bratislava",
  "home.hero.kicker": "Novacode Tech s.r.o. · Bratislava, Slovensko",
  "home.hero.title": "Výkonné webové platformy a herný engine, ktorý ich poháňa.",
  "home.hero.lead":
    "Novacode Tech je butikové softvérové štúdio. Staviame produkčné systémy od začiatku do konca — React frontendy, ktoré zostanú rýchle pod záťažou, Node.js a PHP služby za nimi a real-time HTML5 herné enginy bežiace na regulovaných trhoch. Desať rokov reálne dodaného softvéru, nie slidov.",
  "home.hero.note": "Pohnite myšou a rozvírte pozadie · kliknutím vytvoríte vlnu",

  "home.stats.experience": "rokov dodávania produkčného softvéru",
  "home.stats.markets": "regulovaných trhov v produkcii",
  "home.stats.packages": "balíkov v hernom engine monorepe",
  "home.stats.crm": "CRM a analytické platformy",

  "home.what.kicker": "Čo robíme",
  "home.what.title": "Jeden inžinier naprieč celým stackom.",
  "home.what.lead":
    "Lepší game developer než väčšina platform inžinierov a lepší platform inžinier než väčšina game developerov — takže frontend, služby za ním aj engine, ktorý to vykresľuje, prichádzajú z jedného miesta.",

  "home.card.web.title": "Výkonné webové platformy",
  "home.card.web.text":
    "React aplikácie, ktoré vydržia reálnu prevádzku: CRM a promo enginy, real-time analytické dashboardy, B2B partnerské portály.",
  "home.card.game.title": "HTML5 herné enginy",
  "home.card.game.text":
    "Slot hry na modulárnom Phaser engine, kde je životný cyklus spinu deterministický XState stavový automat, s animáciou poháňanou Spine a GSAP.",
  "home.card.backend.title": "Backend a API",
  "home.card.backend.text":
    "Node.js / NestJS a PHP služby, BFF vrstvy a validácia kontraktov cez dediteľné JSON schémy.",
  "home.card.ai.title": "AI nástroje, ktoré robia skutočnú prácu",
  "home.card.ai.text":
    "Agentné pipeline poháňané Claude v náročných doménach — audit slot-game matematiky, modelovanie príčinných reťazcov vo finančných správach.",

  "home.cta.title": "Máte platformu alebo hru na realizáciu?",
  "home.cta.text": "Napíšte mi, na čom pracujete — odpovedám rýchlo.",

  // ---- Services ----
  "services.title": "Služby — Novacode Tech",
  "services.hero.kicker": "Služby",
  "services.hero.title": "Čo pre vás staviame.",
  "services.hero.lead":
    "Spolupráca siaha od jedného náročného frontendového problému až po návrh a dodanie celej platformy. Každý riadok je produkčný: typovaný, testovaný, sledovateľný a pripravený obstáť pri reálnych používateľoch.",

  "services.s1.title": "Výkonné webové platformy",
  "services.s1.text": "Biznisovo kritické aplikácie, kde sú výkon a správnosť požiadavkou, nie bonusom.",
  "services.s1.li1": "CRM a promo systémy (turnaje, races, free spins, výherné mechaniky)",
  "services.s1.li2": "Real-time analytické dashboardy pre obchodné a technické tímy",
  "services.s1.li3": "B2B partnerské portály so sledovaním výkonu klientov",
  "services.s1.li4": "React 18, Redux / Redux-Saga, Reselect, Immutable.js, MUI, SSR",

  "services.s2.title": "HTML5 herné enginy",
  "services.s2.text":
    "Prehliadačové hry budované ako softvérové produkty — deterministické, laditeľné a certifikovateľné pre regulované trhy.",
  "services.s2.li1": "Slot hry na modulárnom Phaser engine",
  "services.s2.li2": "Životný cyklus spinu ako XState stavové automaty — bez race conditions, obnoviteľný uprostred relácie",
  "services.s2.li3": "Spine kostrová animácia zjednotená s GSAP timeline",
  "services.s2.li4": "Vlastné in-browser nástroje na ladenie a výkon",

  "services.s3.title": "Backend a API infraštruktúra",
  "services.s3.text": "Služby a kontrakty za produktom — navrhnuté pre spoľahlivosť a čistú integráciu.",
  "services.s3.li1": "Node.js a NestJS mikroslužby; PHP / Symfony tam, kde dáva zmysel",
  "services.s3.li2": "BFF vrstvy a agregácia API",
  "services.s3.li3": "Validácia kontraktov a mock servery z dediteľných JSON schém",
  "services.s3.li4": "Redis, PostgreSQL, RabbitMQ, Elasticsearch, Docker",

  "services.s4.title": "AI nástroje a automatizácia",
  "services.s4.text":
    "LLM agenti namierení na skutočné inžinierske problémy — nie chatboty, ale pipeline s overiteľným výstupom.",
  "services.s4.li1": "Multi-agentné Claude pipeline (Opus / Sonnet) s tool use",
  "services.s4.li2": "Doménová analýza, code review a automatizácia codegenu",
  "services.s4.li3": "Spustenia agentov so sledovaním nákladov, obnoviteľné a reprodukovateľné",
  "services.s4.li4": "Embeddingy, pgvector, RAG tam, kde si to zaslúži",

  "services.s5.title": "Architektúra a nástroje",
  "services.s5.text": "Základy, ktoré udržia veľkú kódovú základňu dodateľnú, ako rastie tím aj rozsah.",
  "services.s5.li1": "Nx monorepá so 60+ modulárnymi balíkmi",
  "services.s5.li2": "Interné vývojárske nástroje, asset pipeline, codegen",
  "services.s5.li3": "Real-time analýza výkonu a profilovanie",
  "services.s5.li4": "Testovateľné hranice modulov vhodné pre CI",

  "services.s6.title": "Mobil a mentoring",
  "services.s6.text": "Multiplatformový mobil na rovnakých React základoch, plus senior mentoring a revízie.",
  "services.s6.li1": "React Native pre iOS a Android (kamera, video, GraphQL)",
  "services.s6.li2": "Bývalý React mentor v HTML Academy",
  "services.s6.li3": "Revízie architektúry a audity frontendového výkonu",

  // ---- Expertise / About ----
  "expertise.title": "Expertíza — Novacode Tech",
  "expertise.hero.kicker": "O nás a expertíza",
  "expertise.hero.title": "Dekáda naprieč frontendom, backendom a hernými enginmi.",
  "expertise.hero.lead":
    "Novacode Tech založil a vedie Yurii Zubach — full-stack a game developer, ktorý práve stavia real-time herný engine pre poprednú iGaming spoločnosť.",

  "about.title": "O mne",
  "about.p1":
    "Som Yurii Zubach — full-stack a game developer, ktorý sám píše kód, a človek za štúdiom Novacode Tech. Posledných desať rokov dodávam produkčný softvér: výkonné React frontendy, Node.js a PHP backendy a posledné tri roky real-time herný engine bežiaci na regulovaných trhoch.",
  "about.p2":
    "Mám rád šev medzi dvoma svetmi, ktoré sa málokedy prekrývajú. Som lepší game developer než väčšina platform inžinierov a lepší platform inžinier než väčšina game developerov — takže mi ráno nerobí problém napísať stavový automat poháňajúci spin a popoludní službu, ktorá validuje jeho kontrakty.",
  "about.p3":
    "V praxi to znamenalo: tri CRM a analytické platformy pre živé promo mechaniky; ERP pre americký retailový reťazec; celé e-commerce platformy a frontend internetbankingu pre veľkú banku; backendy v Node.js a PHP; a hlavný vývoj na hernom engine monorepe so 60+ balíkmi. V poslednom čase venujem veľa času AI nástrojom — agentom poháňaným Claude, ktorí robia skutočnú prácu, od auditu hernej matematiky po budovanie príčinných modelov finančných správ.",
  "about.p4":
    "Novacode je zámerne jednočlenné štúdio. Pracujete priamo s inžinierom, ktorý robí rozhodnutia, nie s vrstvou nad ním. Ak máte niečo náročné na realizáciu, rád si to vypočujem.",

  "expertise.stack.title": "Hlavný stack",
  "expertise.stack.frontend": "Frontend",
  "expertise.stack.frontendList":
    "React 16–18 · Redux · Redux-Saga · Reselect · Recompose · Immutable.js · MUI · Styled Components · SSR · i18next",
  "expertise.stack.games": "Hry",
  "expertise.stack.gamesList": "Phaser 3 · Phaser Editor · XState 5 · Spine · GSAP · RxJS",
  "expertise.stack.backend": "Backend",
  "expertise.stack.backendList":
    "Node.js · NestJS · HapiJS · PHP / Symfony · Redis · PostgreSQL · MySQL · RabbitMQ · Elasticsearch · Docker",
  "expertise.stack.ai": "AI a dáta",
  "expertise.stack.aiList": "Claude (Opus / Sonnet) · agentné pipeline · embeddingy · pgvector · BullMQ · Fastify",
  "expertise.stack.tooling": "Architektúra a nástroje",
  "expertise.stack.toolingList": "Nx monorepo · Rspack · Webpack · TypeScript · Jest · Vitest · Puppeteer · pm2 · NGINX",

  "expertise.timeline.title": "Skúsenosti",

  "exp.playson.role": "Full-stack & Game Developer — iGaming (súčasnosť)",
  "exp.playson.period": "sep 2021 – súčasnosť",
  "exp.playson.text":
    "Staviam výkonné systémy pre poprednú iGaming spoločnosť. Tri CRM a analytické platformy pre promo mechaniky, real-time prehľady a B2B partnerov (React 18). Node.js / NestJS mikroslužby s validáciou kontraktov z dediteľných JSON schém. Hlavný vývojár novej generácie slot enginu — 60+ balíkové Nx monorepo na Phaser so spin životným cyklom v XState — plus in-browser vývojárske nástroje, s ktorými tím dodáva.",

  "exp.htmlacademy.role": "React Mentor — HTML Academy",
  "exp.htmlacademy.period": "sep 2020 – feb 2022",
  "exp.htmlacademy.text":
    "Mentoring študentov v kurze „React: Komplexné klientske aplikácie“ — React, Redux, Reselect, testovanie a Webpack.",

  "exp.signnow.role": "Full-stack Developer — signNow (airSlate)",
  "exp.signnow.period": "mar 2020 – sep 2021",
  "exp.signnow.text":
    "Produkt elektronického podpisu. Frontend plus agregácia API služieb a spracovanie backendových requestov na Node.js / HapiJS, React / Redux, Docker.",

  "exp.luxoft.role": "Frontend Developer — Luxoft",
  "exp.luxoft.period": "júl 2019 – mar 2020",
  "exp.luxoft.text":
    "Internetbanking pre podnikateľov vo veľkej banke. React, Redux, Recompose, Reselect, i18next — viacjazyčný a postavený na spoľahlivosti.",

  "exp.leboutique.role": "Full-stack Developer — LeBoutique",
  "exp.leboutique.period": "dec 2018 – júl 2019",
  "exp.leboutique.text":
    "E-commerce platforma so SSR React frontendom a PHP / Symfony backendom za NGINX, Redisom, RabbitMQ a Elasticsearchom.",

  "exp.updg.role": "Frontend & Mobile Developer — UPDG",
  "exp.updg.period": "aug 2018 – júl 2019",
  "exp.updg.text":
    "Dodaný interný ERP pre americký retailový reťazec (React, Apollo/GraphQL, Recharts), React Native aplikácia pre vodičov a iOS/Android video Q&A aplikácia.",

  "exp.bvblogic.role": "Full-stack Developer — bvblogic",
  "exp.bvblogic.period": "feb 2016 – júl 2018",
  "exp.bvblogic.text":
    "Práca na jednom z väčších e-shopov na Ukrajine — PHP / Yii, Redis, MySQL, Elasticsearch, jQuery.",

  // ---- Work ----
  "work.title": "Projekty — Novacode Tech",
  "work.hero.kicker": "Vybrané projekty",
  "work.hero.title": "Čo sme postavili.",
  "work.hero.lead":
    "Tri projekty, na ktoré som hrdý, opísané dosť konkrétne na to, aby boli skutočné. Mechaniky špecifické pre klienta zostávajú dôverné — architektúra nie.",

  "work.flagship.title": "Hlavné projekty",

  "work.f1.tag": "iGaming · Herný engine · 3 roky",
  "work.f1.title": "Slot engine novej generácie",
  "work.f1.text":
    "Hlavný inžinier na slot engine novej generácie pre poprednú iGaming spoločnosť — tri roky a stále pokračuje. Je to 60+ balíkové Nx / TypeScript monorepo na Phaser, kde je celý životný cyklus spinu modelovaný ako trojúrovňová hierarchia XState stavových automatov: deterministická, bez race conditions a obnoviteľná uprostred relácie — presne to, čo regulovaná hra musí garantovať. Animácia žije vo fluentnej GSAP timeline vrstve, ktorá zjednocuje tweeny, Spine kostrovú animáciu a stav komponentov do jedného deklaratívneho API. Postavil som aj in-browser nástroje na ladenie — živá inšpekcia stavových automatov, scrubbing GSAP timeline, profilovanie pamäte prefab poolu — ktoré používa celý tím pri dodávaní nových titulov.",
  "work.f1.stack": "Phaser 3 · XState 5 · GSAP · Spine · Nx · Rspack · TypeScript",

  "work.f2.tag": "iGaming · AI nástroje",
  "work.f2.title": "AI copilot pre herných matematikov",
  "work.f2.text":
    "TypeScript CLI — s React/Ink terminálovým UI — ktorý zastreší celý workflow slot matematiky: vytvorenie modelu, Monte Carlo simulácie až do 100M spinov naprieč worker threadmi a analýzu RTP, volatility a frekvencie výhier. Najviac som hrdý na agentnú vrstvu: zreťazené Claude (Opus / Sonnet) pipeline, ktoré spätne analyzujú RTP rozpočet existujúcej hry do znovupoužiteľných, zdokumentovaných „skills“, a potom auditujú novú matematiku oproti 60+ kontrolám správnosti a compliance. Mení to viacdňovú manuálnu certifikačnú revíziu na opakovateľnú, obnoviteľnú pipeline so sledovaním nákladov.",
  "work.f2.stack": "TypeScript · Claude (Opus/Sonnet) · Ink · Monte Carlo · Node.js worker threads",

  "work.f3.tag": "R&D · Trhová inteligencia",
  "work.f3.title": "Mantis — obchodné signály z noviniek",
  "work.f3.text":
    "Vlastná R&D platforma, ktorá mení finančné správy na obchodné signály. Zbiera 30+ inštitucionálnych, krypto a makro zdrojov a potom beží osemstupňová pipeline: normalizácia → deduplikácia (Redis + pgvector embeddingy) → klasifikácia a extrakcia entít cez Claude → ensemble sentiment → príčinné reťazce modelujúce dve až tri úrovne pravdepodobných dôsledkov na udalosť. Súvisiace udalosti sa zoskupujú do signálov so skóre konsenzu, váženého naprieč ôsmimi dimenziami kvality zdroja, a uzavretá spätná väzba hodnotí každý signál oproti reálnym pohybom ceny 1h / 4h / 24h pomocou nemenných kotiev — systém teda meria, či mal naozaj pravdu, nie či len znel sebavedomo.",
  "work.f3.stack": "TypeScript · Claude · PostgreSQL + pgvector · BullMQ · Fastify · Redis",

  "work.more.title": "Ďalšia práca",
  "work.m1.tag": "iGaming · Frontend",
  "work.m1.title": "CRM pre promo manažment",
  "work.m1.text": "Živé promo mechaniky — turnaje, races, free spins, kolesá šťastia — naprieč výkonným kasíno produktom.",
  "work.m2.tag": "iGaming · Analytika",
  "work.m2.title": "Real-time analytický dashboard",
  "work.m2.text": "Živé dáta premenené na strategické dashboardy pre obchodné a technické tímy.",
  "work.m3.tag": "iGaming · B2B",
  "work.m3.title": "B2B partnerský portál",
  "work.m3.text": "Analytický portál, kde partneri sledujú výkon klientov, na rovnakom výkonnom React základe.",
  "work.m4.tag": "Fintech · Banking",
  "work.m4.title": "Internetbanking pre podnikateľov",
  "work.m4.text": "Viacjazyčný frontend postavený na spoľahlivosti pre platformu firemného bankovníctva vo veľkej banke.",
  "work.m5.tag": "E-commerce",
  "work.m5.title": "E-shopy s vysokou návštevnosťou",
  "work.m5.text": "SSR React frontendy nad PHP službami s frontami a vyhľadávaním cez Elasticsearch, na veľkých e-commerce platformách.",
  "work.m6.tag": "Mobil · React Native",
  "work.m6.title": "Multiplatformové mobilné aplikácie",
  "work.m6.text": "Aplikácia pre vodičov a video Q&A aplikácia pre iOS a Android — kamera, video, GraphQL.",

  // ---- Contact ----
  "contact.title": "Kontakt — Novacode Tech",
  "contact.hero.kicker": "Kontakt",
  "contact.hero.title": "Poďme niečo postaviť.",
  "contact.hero.lead": "Napíšte mi o svojej platforme, hre alebo náročnom frontendovom probléme. Odpovedám rýchlo.",
  "contact.email.label": "E-mail",
  "contact.linkedin.label": "LinkedIn",
  "contact.telegram.label": "Telegram",
  "contact.button": "Napíšte mi e-mail",

  "contact.company.title": "Údaje o spoločnosti",
  "contact.company.name": "Obchodné meno",
  "contact.company.ico": "IČO",
  "contact.company.dic": "DIČ",
  "contact.company.vat": "IČ DPH",
  "contact.company.form": "Právna forma",
  "contact.company.formValue": "Spoločnosť s ručením obmedzeným (s.r.o.)",
  "contact.company.seat": "Sídlo",
  "contact.company.reg": "Registrácia",
  "contact.company.regValue":
    "Obchodný register Mestského súdu Bratislava III · oddiel Sro, vložka 187106/B",

  "footer.built": "Postavené v Bratislave.",
};

export const dict: Record<Lang, Record<TKey, string>> = { en, sk };
