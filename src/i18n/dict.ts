/* =========================================================================
 * EN / SK dictionaries. `sk` is typed as Record<TKey, string>, so the
 * compiler refuses to build if a key is missing or misspelled in Slovak.
 * ========================================================================= */

export const en = {
  "meta.brand": "Novacode Tech",

  "nav.home": "Home",
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
    "Novacode Tech is a software studio working in iGaming. We build production systems end to end — React frontends that hold up under load, Node.js and PHP services behind them, and real-time HTML5 game engines for regulated markets. We work inside product teams and move things forward together.",
  "home.hero.note": "Move your mouse to stir the background · click to ripple",

  "home.stats.experience": "years shipping production software",
  "home.stats.industries": "industries delivered in",
  "home.stats.products": "products & platforms shipped",

  "home.what.kicker": "What we do",
  "home.what.title": "Across the whole stack, and across teams.",
  "home.what.lead":
    "We're as comfortable in a React dashboard as in the Node or PHP service behind it and the game engine that renders the result. We join product teams, carry ideas from prototype to release, and care about the process as much as the code.",

  "home.cta.title": "Have a platform or a game to build?",
  "home.cta.text": "Tell us what you're working on — we reply fast.",

  // ---- What we build (services detail, shown on Home) ----
  "services.s1.title": "High-load web platforms",
  "services.s1.text":
    "Business-critical applications where performance and correctness are hard requirements.",
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
    "LLM agents aimed at real engineering work — pipelines with verifiable output that plug into the team's workflow.",
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
  "services.s6.li2": "Mentored 10+ React engineers to course completion (HTML Academy)",
  "services.s6.li3": "Architecture reviews & frontend performance audits",

  // ---- Expertise / About ----
  "expertise.title": "Expertise — Novacode Tech",
  "expertise.hero.kicker": "About & expertise",
  "expertise.hero.title": "A decade across frontend, backend and game engines.",
  "expertise.hero.lead":
    "Novacode Tech is the studio of Yurii Zubach — a full-stack and game developer building high-load platforms and a real-time game engine for the iGaming industry.",

  "about.title": "About",
  "about.p1":
    "Novacode Tech is the studio of Yurii Zubach — a full-stack and game developer with about ten years of shipping production software. The last four have been in iGaming: high-load React platforms, Node.js and PHP services, and a real-time HTML5 game engine for regulated markets.",
  "about.p2":
    "We work close to the team, day to day — with product managers, designers, game mathematicians, QA and other engineering teams. We collaborate in English and Slovak (AI-assisted) and natively in Ukrainian and Russian.",
  "about.p3":
    "Ownership is what drives us. When we spot a problem, we dig in, build a proof of concept to test the idea, then bring it to colleagues and make the case for taking it further together. A lot of what we're proud of started exactly there — from AI tooling for game math to web platforms that grew into systems teams rely on every day.",
  "about.p4":
    "Good products come from people and process — communication, shared ownership, steady iteration. We build the team and the momentum around an idea as much as we build the code. If you have something hard to build, we'd like to hear about it.",

  "howwework.title": "How we work",
  "howwework.v1.title": "Ownership, end to end",
  "howwework.v1.text":
    "We find the problem, prototype the fix, and carry the idea through with the team — from proof of concept to production.",
  "howwework.v2.title": "Built with teams",
  "howwework.v2.text":
    "We work inside product teams and across them — product, design, math, QA and backend — because that's how real products ship.",
  "howwework.v3.title": "Craft that lasts",
  "howwework.v3.text":
    "We're proud of platforms still in daily use years on, tooling other engineers pick up, and code that stays calm to maintain.",

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

  "exp.s1.period": "2021 — present",
  "exp.s1.title": "Real-time game engines & high-load platforms",
  "exp.s1.text":
    "Where we are now: core engineering on a next-generation HTML5 slot-game engine for the iGaming industry — a 60+ package TypeScript monorepo on Phaser, with the spin lifecycle modeled as XState statecharts and animation driven by GSAP and Spine. Alongside it: high-load React CRM and analytics platforms, Node.js / NestJS microservices, and AI agent tooling (Claude) for game math and for modeling causality in financial news. Domain: regulated real-money gaming, high concurrency, certification. Some work from this period is under NDA.",

  "exp.s2.period": "2019 — 2021",
  "exp.s2.title": "Fintech & SaaS, full-stack",
  "exp.s2.text":
    "Product engineering across high-trust domains. On signNow we worked full-stack on an e-signature SaaS — React / Redux over Node.js / HapiJS service aggregation. For Alfa-Bank's online-banking platform for entrepreneurs we built a multilingual, reliability-first React frontend. In parallel we mentored engineers through an advanced React client-applications course. Domain: e-signature workflows, online banking, secure document handling.",

  "exp.s3.period": "2018 — 2019",
  "exp.s3.title": "Cross-platform product engineering",
  "exp.s3.text":
    "Web and mobile in parallel: SSR React e-commerce frontends over queue-backed PHP back-ends, an internal ERP, a React Native driver app, and an iOS / Android video Q&A app on Apollo / GraphQL. Domain: e-commerce, mobile, GraphQL APIs, and shipping one product to many platforms.",

  "exp.s4.period": "2016 — 2018",
  "exp.s4.title": "Foundations in large-scale e-commerce",
  "exp.s4.text":
    "Where we cut our teeth: full-stack work on MOYO, one of Ukraine's larger e-commerce platforms — PHP / Yii, Redis, MySQL and Elasticsearch under real traffic. High-load thinking, caching and search at scale became second nature here, alongside other client projects under NDA.",

  // ---- Work ----
  "work.title": "Work — Novacode Tech",
  "work.hero.kicker": "Selected work",
  "work.hero.title": "Things we've built.",
  "work.hero.lead":
    "Three projects we're proud of, described in enough detail to be real. Client-specific mechanics stay confidential; the architecture doesn't.",

  "work.flagship.title": "Flagship projects",

  "work.f1.tag": "iGaming · Game engine · 3 years",
  "work.f1.title": "Next-generation slot-game engine",
  "work.f1.text":
    "We work at the core of a next-generation slot engine for the iGaming industry — three years and counting. It's a 60+ package Nx / TypeScript monorepo on Phaser, where the whole spin lifecycle is modeled as a three-level XState statechart hierarchy: deterministic, free of race conditions, and recoverable mid-session, which is what a regulated game has to guarantee. Animation runs through a fluent GSAP timeline layer that unifies tweens, Spine skeletal animation and component state in one declarative API. We also built the in-browser debug tooling — live statechart inspection, GSAP timeline scrubbing, prefab-pool memory profiling — that the whole team uses to ship new titles.",
  "work.f1.stack": "Phaser 3 · XState 5 · GSAP · Spine · Nx · Rspack · TypeScript",

  "work.f2.tag": "iGaming · AI tooling",
  "work.f2.title": "AI copilot for game mathematicians",
  "work.f2.text":
    "A TypeScript CLI with a React/Ink terminal UI that wraps the whole slot-math workflow: scaffold a model, run Monte Carlo simulations of up to 100M spins across worker threads, and analyze RTP, volatility and hit-frequency. The agent layer is what we're proudest of — chained Claude (Opus / Sonnet) pipelines and a library of 60+ reusable skills that capture how our existing games are built and feed that back to steer new math. It turns a multi-day manual certification review into a repeatable, resumable, cost-tracked pipeline.",
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
  "contact.hero.lead": "Tell us about your platform, game or hard frontend problem. We reply quickly.",
  "contact.email.label": "Email",
  "contact.linkedin.label": "LinkedIn",
  "contact.telegram.label": "Telegram",
  "contact.button": "Write us an email",

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
export type Lang = "en" | "sk" | "uk";

export const sk: Record<TKey, string> = {
  "meta.brand": "Novacode Tech",

  "nav.home": "Domov",
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
    "Novacode Tech je softvérové štúdio pôsobiace v iGamingu. Staviame produkčné systémy od začiatku do konca — React frontendy, ktoré vydržia záťaž, Node.js a PHP služby za nimi a real-time HTML5 herné enginy pre regulované trhy. Pracujeme vnútri produktových tímov a posúvame veci dopredu spoločne.",
  "home.hero.note": "Pohnite myšou a rozvírte pozadie · kliknutím vytvoríte vlnu",

  "home.stats.experience": "rokov dodávania produkčného softvéru",
  "home.stats.industries": "odvetví, v ktorých som dodával",
  "home.stats.products": "dodaných produktov a platforiem",

  "home.what.kicker": "Čo robíme",
  "home.what.title": "Naprieč celým stackom aj naprieč tímami.",
  "home.what.lead":
    "Rovnako sme doma v React dashboarde ako v Node či PHP službe za ním a v hernom engine, ktorý výsledok vykresľuje. Pripájame sa k produktovým tímom, vedieme nápady od prototypu po release a na procese nám záleží rovnako ako na kóde.",

  "home.cta.title": "Máte platformu alebo hru na realizáciu?",
  "home.cta.text": "Napíšte nám, na čom pracujete — odpovedáme rýchlo.",

  // ---- What we build (services detail, shown on Home) ----
  "services.s1.title": "Výkonné webové platformy",
  "services.s1.text": "Biznisovo kritické aplikácie, kde sú výkon a správnosť tvrdou požiadavkou.",
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
    "LLM agenti zameraní na skutočnú inžiniersku prácu — pipeline s overiteľným výstupom, ktoré zapadnú do workflow tímu.",
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
  "services.s6.li2": "Mentoring 10+ React inžinierov do ukončenia kurzu (HTML Academy)",
  "services.s6.li3": "Revízie architektúry a audity frontendového výkonu",

  // ---- Expertise / About ----
  "expertise.title": "Expertíza — Novacode Tech",
  "expertise.hero.kicker": "O nás a expertíza",
  "expertise.hero.title": "Dekáda naprieč frontendom, backendom a hernými enginmi.",
  "expertise.hero.lead":
    "Novacode Tech je štúdio Yuriia Zubacha — full-stack a game developera, ktorý stavia výkonné platformy a real-time herný engine pre odvetvie iGamingu.",

  "about.title": "O nás",
  "about.p1":
    "Novacode Tech je štúdio Yuriia Zubacha — full-stack a game developera s približne desiatimi rokmi dodávania produkčného softvéru. Posledné štyri boli v iGamingu: výkonné React platformy, Node.js a PHP služby a real-time HTML5 herný engine pre regulované trhy.",
  "about.p2":
    "Pracujeme blízko tímu, deň čo deň — s produktovými manažérmi, dizajnérmi, hernými matematikmi, QA a ďalšími inžinierskymi tímami. Komunikujeme po anglicky a slovensky (s pomocou AI) a natívne po ukrajinsky a rusky.",
  "about.p3":
    "Ženie nás ownership. Keď narazíme na problém, ponoríme sa doň, postavíme proof of concept na overenie nápadu a potom ho prinesieme kolegom a presvedčíme ich posunúť to ďalej spoločne. Veľa z toho, na čo sme hrdí, začalo presne tam — od AI nástrojov pre hernú matematiku po webové platformy, ktoré vyrástli do systémov, na ktoré sa tímy denne spoliehajú.",
  "about.p4":
    "Dobré produkty vznikajú z ľudí a procesu — komunikácie, zdieľaného ownershipu, stálej iterácie. Okolo nápadu budujeme tím a ťah rovnako ako samotný kód. Ak máte niečo náročné na realizáciu, radi si to vypočujeme.",

  "howwework.title": "Ako pracujeme",
  "howwework.v1.title": "Ownership od začiatku do konca",
  "howwework.v1.text":
    "Nájdeme problém, naprototypujeme riešenie a prevedieme nápad s tímom — od proof of concept po produkciu.",
  "howwework.v2.title": "Budované s tímami",
  "howwework.v2.text":
    "Pracujeme vnútri produktových tímov aj naprieč nimi — produkt, dizajn, matematika, QA a backend — pretože tak vznikajú skutočné produkty.",
  "howwework.v3.title": "Remeslo, ktoré vydrží",
  "howwework.v3.text":
    "Sme hrdí na platformy, ktoré sú v dennom používaní aj po rokoch, na nástroje, ktoré si osvoja iní inžinieri, a na kód, ktorý sa udržiava pokojne.",

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

  "exp.s1.period": "2021 — súčasnosť",
  "exp.s1.title": "Real-time herné enginy a výkonné platformy",
  "exp.s1.text":
    "Kde sme teraz: kľúčový vývoj HTML5 slot enginu novej generácie pre odvetvie iGamingu — 60+ balíkové TypeScript monorepo na Phaser, kde je životný cyklus spinu modelovaný ako XState stavové automaty a animáciu poháňajú GSAP a Spine. Popri tom: výkonné React CRM a analytické platformy, Node.js / NestJS mikroslužby a AI agentné nástroje (Claude) pre hernú matematiku a modelovanie príčinnosti vo finančných správach. Doména: regulované real-money gaming, vysoká súbežnosť, certifikácia. Časť práce z tohto obdobia je pod NDA.",

  "exp.s2.period": "2019 — 2021",
  "exp.s2.title": "Fintech a SaaS, full-stack",
  "exp.s2.text":
    "Produktové inžinierstvo v náročných, dôveryhodných doménach. Na signNow sme robili full-stack na SaaS pre elektronický podpis — React / Redux nad agregáciou služieb na Node.js / HapiJS. Pre online-banking platformu Alfa-Bank pre podnikateľov sme postavili viacjazyčný, na spoľahlivosť zameraný React frontend. Súbežne sme mentorovali inžinierov v pokročilom kurze React klientskych aplikácií. Doména: workflow elektronického podpisu, internetbanking, bezpečná práca s dokumentmi.",

  "exp.s3.period": "2018 — 2019",
  "exp.s3.title": "Multiplatformové produktové inžinierstvo",
  "exp.s3.text":
    "Web aj mobil súbežne: SSR React e-commerce frontendy nad PHP backendmi s frontami, interný ERP, React Native aplikácia pre vodičov a iOS / Android video Q&A aplikácia na Apollo / GraphQL. Doména: e-commerce, mobil, GraphQL API a dodávanie jedného produktu na viaceré platformy.",

  "exp.s4.period": "2016 — 2018",
  "exp.s4.title": "Základy vo veľkom e-commerce",
  "exp.s4.text":
    "Kde sme sa zocelili: full-stack práca na MOYO, jednom z väčších e-commerce na Ukrajine — PHP / Yii, Redis, MySQL a Elasticsearch pod reálnou prevádzkou. Myslenie na high-load, caching a vyhľadávanie v škále sa tu stalo druhou prirodzenosťou, popri ďalších klientskych projektoch pod NDA.",

  // ---- Work ----
  "work.title": "Projekty — Novacode Tech",
  "work.hero.kicker": "Vybrané projekty",
  "work.hero.title": "Čo sme postavili.",
  "work.hero.lead":
    "Tri projekty, na ktoré sme hrdí, opísané dosť konkrétne na to, aby boli skutočné. Mechaniky špecifické pre klienta zostávajú dôverné; architektúra nie.",

  "work.flagship.title": "Hlavné projekty",

  "work.f1.tag": "iGaming · Herný engine · 3 roky",
  "work.f1.title": "Slot engine novej generácie",
  "work.f1.text":
    "Pracujeme v jadre slot enginu novej generácie pre odvetvie iGamingu — tri roky a stále pokračuje. Je to 60+ balíkové Nx / TypeScript monorepo na Phaser, kde je celý životný cyklus spinu modelovaný ako trojúrovňová hierarchia XState stavových automatov: deterministická, bez race conditions a obnoviteľná uprostred relácie, čo regulovaná hra musí garantovať. Animácia beží cez plynulú GSAP timeline vrstvu, ktorá zjednocuje tweeny, Spine kostrovú animáciu a stav komponentov v jednom deklaratívnom API. Postavili sme aj in-browser nástroje na ladenie — živú inšpekciu stavových automatov, scrubbing GSAP timeline, profilovanie pamäte prefab poolu — ktoré používa celý tím pri vydávaní nových titulov.",
  "work.f1.stack": "Phaser 3 · XState 5 · GSAP · Spine · Nx · Rspack · TypeScript",

  "work.f2.tag": "iGaming · AI nástroje",
  "work.f2.title": "AI copilot pre herných matematikov",
  "work.f2.text":
    "TypeScript CLI s terminálovým UI na React/Ink, ktoré zastreší celý workflow slot matematiky: vytvorenie modelu, Monte Carlo simulácie až do 100M spinov naprieč worker threadmi a analýzu RTP, volatility a frekvencie výhier. Najviac sme hrdí na agentnú vrstvu — zreťazené Claude (Opus / Sonnet) pipeline a knižnicu 60+ znovupoužiteľných „skills“, ktoré zachytávajú, ako sú postavené naše existujúce hry, a vracajú to späť na nasmerovanie novej matematiky. Mení to viacdňovú manuálnu certifikačnú revíziu na opakovateľnú, obnoviteľnú pipeline so sledovaním nákladov.",
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
  "contact.hero.lead": "Napíšte nám o svojej platforme, hre alebo náročnom frontendovom probléme. Odpovedáme rýchlo.",
  "contact.email.label": "E-mail",
  "contact.linkedin.label": "LinkedIn",
  "contact.telegram.label": "Telegram",
  "contact.button": "Napíšte nám e-mail",

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

export const uk: Record<TKey, string> = {
  "meta.brand": "Novacode Tech",

  "nav.home": "Головна",
  "nav.expertise": "Експертиза",
  "nav.work": "Проєкти",
  "nav.contact": "Контакти",
  "nav.menu": "Меню",

  "cta.contact": "Почати проєкт",
  "cta.services": "Що ми будуємо",

  // ---- Home ----
  "home.title": "Novacode Tech — Софтверна студія · Братислава",
  "home.hero.kicker": "Novacode Tech s.r.o. · Братислава, Словаччина",
  "home.hero.title": "Високонавантажені вебплатформи та ігровий engine за ними.",
  "home.hero.lead":
    "Novacode Tech — це софтверна студія, що працює в iGaming. Ми будуємо продакшн-системи від початку до кінця: React-фронтенди, що витримують навантаження, Node.js та PHP сервіси за ними, і real-time HTML5 ігрові engine для регульованих ринків. Ми працюємо всередині продуктових команд і рухаємо справу вперед разом.",
  "home.hero.note": "Рухайте мишею, щоб збурити фон · клікніть, щоб пустити хвилю",

  "home.stats.experience": "років розробки продакшн-софту",
  "home.stats.industries": "галузей, у яких працював",
  "home.stats.products": "зроблених продуктів і платформ",

  "home.what.kicker": "Що ми робимо",
  "home.what.title": "Через увесь стек і через команди.",
  "home.what.lead":
    "Нам однаково комфортно і в React-дашборді, і в Node чи PHP сервісі за ним, і в ігровому engine, що малює результат. Ми долучаємося до продуктових команд, ведемо ідеї від прототипу до релізу й цінуємо процес не менше за код.",

  "home.cta.title": "Маєте платформу чи гру для реалізації?",
  "home.cta.text": "Напишіть, над чим працюєте — відповідаємо швидко.",

  // ---- What we build ----
  "services.s1.title": "Високонавантажені вебплатформи",
  "services.s1.text":
    "Бізнес-критичні застосунки, де продуктивність і коректність — тверда вимога.",
  "services.s1.li1": "CRM та системи промо-менеджменту (турніри, races, free spins, виграшні механіки)",
  "services.s1.li2": "Real-time аналітичні дашборди для комерційних і технічних команд",
  "services.s1.li3": "B2B партнерські портали з відстеженням показників клієнтів",
  "services.s1.li4": "React 18, Redux / Redux-Saga, Reselect, Immutable.js, MUI, SSR",

  "services.s2.title": "HTML5 ігрові engine",
  "services.s2.text":
    "Браузерні ігри, спроєктовані як софтверні продукти — детерміновані, придатні для дебагу й сертифікації на регульованих ринках.",
  "services.s2.li1": "Слот-ігри на модульному Phaser engine",
  "services.s2.li2": "Життєвий цикл спіну як XState-стейтчарти — без race conditions, з відновленням посеред сесії",
  "services.s2.li3": "Скелетна анімація Spine, поєднана з GSAP-таймлайнами",
  "services.s2.li4": "Власні in-browser інструменти для дебагу та продуктивності",

  "services.s3.title": "Backend та API-інфраструктура",
  "services.s3.text": "Сервіси й контракти за продуктом — спроєктовані для надійності та чистої інтеграції.",
  "services.s3.li1": "Мікросервіси на Node.js та NestJS; PHP / Symfony там, де доречно",
  "services.s3.li2": "BFF-шари та агрегація API",
  "services.s3.li3": "Валідація контрактів і mock-сервери з успадковуваних JSON-схем",
  "services.s3.li4": "Redis, PostgreSQL, RabbitMQ, Elasticsearch, Docker",

  "services.s4.title": "AI-інструменти та автоматизація",
  "services.s4.text":
    "LLM-агенти, націлені на реальну інженерну роботу — пайплайни з перевірюваним результатом, що вбудовуються у workflow команди.",
  "services.s4.li1": "Мультиагентні пайплайни на Claude (Opus / Sonnet) з tool use",
  "services.s4.li2": "Доменний аналіз, code review та автоматизація codegen",
  "services.s4.li3": "Запуски агентів з обліком вартості, відновлювані й відтворювані",
  "services.s4.li4": "Embeddings, pgvector, RAG там, де це виправдано",

  "services.s5.title": "Архітектура та інструменти розробки",
  "services.s5.text": "Фундамент, що тримає велику кодову базу придатною до релізів, поки зростають команда й обсяг.",
  "services.s5.li1": "Nx-монорепозиторії з 60+ модульними пакетами",
  "services.s5.li2": "Внутрішні інструменти розробника, asset-пайплайни, codegen",
  "services.s5.li3": "Real-time аналіз продуктивності та профілювання",
  "services.s5.li4": "Тестовані, CI-дружні межі модулів",

  "services.s6.title": "Мобайл та менторство",
  "services.s6.text": "Кросплатформний мобайл на тих самих React-основах, плюс senior-менторство та рев’ю.",
  "services.s6.li1": "React Native для iOS та Android (камера, відео, GraphQL)",
  "services.s6.li2": "Менторство 10+ React-інженерів до завершення курсу (HTML Academy)",
  "services.s6.li3": "Рев’ю архітектури та аудит продуктивності фронтенду",

  // ---- Expertise / About ----
  "expertise.title": "Експертиза — Novacode Tech",
  "expertise.hero.kicker": "Про мене та експертиза",
  "expertise.hero.title": "Десятиліття у фронтенді, бекенді та ігрових engine.",
  "expertise.hero.lead":
    "Novacode Tech — це студія Юрія Зубача, full-stack та game-розробника, що будує високонавантажені платформи й real-time ігровий engine для галузі iGaming.",

  "about.title": "Про нас",
  "about.p1":
    "Novacode Tech — це студія Юрія Зубача, full-stack та game-розробника з приблизно десятьма роками розробки продакшн-софту. Останні чотири — в iGaming: високонавантажені React-платформи, Node.js та PHP сервіси й real-time HTML5 ігровий engine для регульованих ринків.",
  "about.p2":
    "Ми працюємо близько до команди, день за днем — з продакт-менеджерами, дизайнерами, ігровими математиками, QA та іншими інженерними командами. Спілкуємося англійською та словацькою (з допомогою AI) і вільно українською та російською.",
  "about.p3":
    "Нас рухає ownership. Коли ми бачимо проблему, ми заглиблюємося в неї, будуємо proof of concept, щоб перевірити ідею, а потім приносимо її колегам і переконуємо рухати далі разом. Багато з того, чим ми пишаємося, почалося саме так — від AI-інструментів для ігрової математики до вебплатформ, що виросли в системи, на які команди спираються щодня.",
  "about.p4":
    "Хороші продукти народжуються з людей і процесу — комунікації, спільного ownership, сталої ітерації. Навколо ідеї ми будуємо команду й рух так само, як і сам код. Якщо у вас є щось складне для реалізації — будемо раді почути.",

  "howwework.title": "Як ми працюємо",
  "howwework.v1.title": "Ownership від початку до кінця",
  "howwework.v1.text":
    "Ми знаходимо проблему, прототипуємо рішення і проводимо ідею з командою — від proof of concept до продакшну.",
  "howwework.v2.title": "Будуємо з командами",
  "howwework.v2.text":
    "Ми працюємо всередині продуктових команд і між ними — продукт, дизайн, математика, QA та бекенд — бо саме так народжуються справжні продукти.",
  "howwework.v3.title": "Майстерність, що лишається",
  "howwework.v3.text":
    "Ми пишаємося платформами, що в щоденному використанні навіть за роки, інструментами, які переймають інші інженери, і кодом, який спокійно підтримувати.",

  "expertise.stack.title": "Основний стек",
  "expertise.stack.frontend": "Фронтенд",
  "expertise.stack.frontendList":
    "React 16–18 · Redux · Redux-Saga · Reselect · Recompose · Immutable.js · MUI · Styled Components · SSR · i18next",
  "expertise.stack.games": "Ігри",
  "expertise.stack.gamesList": "Phaser 3 · Phaser Editor · XState 5 · Spine · GSAP · RxJS",
  "expertise.stack.backend": "Бекенд",
  "expertise.stack.backendList":
    "Node.js · NestJS · HapiJS · PHP / Symfony · Redis · PostgreSQL · MySQL · RabbitMQ · Elasticsearch · Docker",
  "expertise.stack.ai": "AI та дані",
  "expertise.stack.aiList": "Claude (Opus / Sonnet) · agent pipelines · embeddings · pgvector · BullMQ · Fastify",
  "expertise.stack.tooling": "Архітектура та інструменти",
  "expertise.stack.toolingList": "Nx monorepo · Rspack · Webpack · TypeScript · Jest · Vitest · Puppeteer · pm2 · NGINX",

  "expertise.timeline.title": "Досвід",

  "exp.s1.period": "2021 — зараз",
  "exp.s1.title": "Real-time ігрові engine та високонавантажені платформи",
  "exp.s1.text":
    "Де ми зараз: ключова розробка HTML5 слот-engine нового покоління для галузі iGaming — монорепозиторій з 60+ пакетів на TypeScript і Phaser, де життєвий цикл спіну змодельовано як XState-стейтчарти, а анімацію керують GSAP і Spine. Поряд: високонавантажені React CRM та аналітичні платформи, мікросервіси на Node.js / NestJS і AI-агентні інструменти (Claude) для ігрової математики та моделювання причинності фінансових новин. Домен: регульований real-money gaming, висока конкурентність, сертифікація. Частина роботи цього періоду під NDA.",

  "exp.s2.period": "2019 — 2021",
  "exp.s2.title": "Fintech та SaaS, full-stack",
  "exp.s2.text":
    "Продуктова розробка в доменах із високою довірою. У signNow ми працювали full-stack над SaaS для електронного підпису — React / Redux поверх агрегації сервісів на Node.js / HapiJS. Для платформи інтернет-банкінгу Alfa-Bank для підприємців ми побудували багатомовний, орієнтований на надійність React-фронтенд. Паралельно менторили інженерів на просунутому курсі з клієнтських застосунків React. Домен: workflow електронного підпису, інтернет-банкінг, безпечна робота з документами.",

  "exp.s3.period": "2018 — 2019",
  "exp.s3.title": "Кросплатформна продуктова розробка",
  "exp.s3.text":
    "Веб і мобайл паралельно: SSR React e-commerce фронтенди поверх PHP-бекендів з чергами, внутрішній ERP, React Native застосунок для водіїв та iOS / Android відео Q&A застосунок на Apollo / GraphQL. Домен: e-commerce, мобайл, GraphQL API і доставка одного продукту на багато платформ.",

  "exp.s4.period": "2016 — 2018",
  "exp.s4.title": "Основи у великому e-commerce",
  "exp.s4.text":
    "Де ми загартувалися: full-stack робота над MOYO, однією з більших e-commerce платформ України — PHP / Yii, Redis, MySQL та Elasticsearch під реальним трафіком. Мислення про high-load, кешування та пошук у масштабі стало тут другою натурою, поряд з іншими клієнтськими проєктами під NDA.",

  // ---- Work ----
  "work.title": "Проєкти — Novacode Tech",
  "work.hero.kicker": "Вибрані проєкти",
  "work.hero.title": "Те, що ми збудували.",
  "work.hero.lead":
    "Три проєкти, якими пишаємося, описані достатньо конкретно, щоб бути справжніми. Специфічні для клієнта механіки лишаються конфіденційними; архітектура ні.",

  "work.flagship.title": "Флагманські проєкти",

  "work.f1.tag": "iGaming · Ігровий engine · 3 роки",
  "work.f1.title": "Слот-engine нового покоління",
  "work.f1.text":
    "Ми працюємо в ядрі слот-engine нового покоління для галузі iGaming — три роки й далі. Це монорепозиторій з 60+ пакетів на Nx / TypeScript і Phaser, де весь життєвий цикл спіну змодельовано як трирівневу ієрархію XState-стейтчартів: детерміновану, без race conditions і з відновленням посеред сесії, що регульована гра має гарантувати. Анімація працює через плавний шар GSAP-таймлайнів, що поєднує твіни, скелетну анімацію Spine та стан компонентів в одному декларативному API. Ми також збудували in-browser інструменти для дебагу — живу інспекцію стейтчартів, скрабінг GSAP-таймлайну, профілювання пам’яті prefab-пулу — якими користується вся команда, випускаючи нові тайтли.",
  "work.f1.stack": "Phaser 3 · XState 5 · GSAP · Spine · Nx · Rspack · TypeScript",

  "work.f2.tag": "iGaming · AI-інструменти",
  "work.f2.title": "AI-копілот для ігрових математиків",
  "work.f2.text":
    "TypeScript CLI з термінальним UI на React/Ink, що охоплює весь workflow слот-математики: створення моделі, Monte Carlo симуляції до 100M спінів на worker-потоках та аналіз RTP, волатильності й частоти виграшів. Найбільше пишаємося агентним шаром — ланцюжки пайплайнів на Claude (Opus / Sonnet) і бібліотека з 60+ перевикористовуваних «скілів», що фіксують, як побудовані наші наявні ігри, і повертають це для скерування нової математики. Це перетворює багатоденне ручне сертифікаційне рев’ю на повторюваний, відновлюваний пайплайн з обліком вартості.",
  "work.f2.stack": "TypeScript · Claude (Opus/Sonnet) · Ink · Monte Carlo · Node.js worker threads",

  "work.f3.tag": "R&D · Ринкова аналітика",
  "work.f3.title": "Mantis — торгові сигнали з новин",
  "work.f3.text":
    "Власна R&D-платформа, що перетворює фінансові новини на торгові сигнали. Вона збирає 30+ інституційних, крипто- та макро-джерел, а потім запускає восьмиетапний пайплайн: нормалізація → дедуплікація (Redis + pgvector embeddings) → класифікація та витяг сутностей через Claude → ансамблевий сентимент → причинні ланцюжки, що моделюють два-три рівні ймовірних наслідків на подію. Пов’язані події об’єднуються у сигнали зі скорингом консенсусу, зваженим за вісьмома вимірами якості джерела, а замкнений цикл зворотного зв’язку оцінює кожен сигнал відносно реальних рухів ціни за 1 год / 4 год / 24 год за допомогою незмінних якорів — тож система міряє, чи мала вона рацію насправді, а не чи просто звучала впевнено.",
  "work.f3.stack": "TypeScript · Claude · PostgreSQL + pgvector · BullMQ · Fastify · Redis",

  "work.more.title": "Інші роботи",
  "work.m1.tag": "iGaming · Фронтенд",
  "work.m1.title": "CRM для промо-менеджменту",
  "work.m1.text": "Живі промо-механіки — турніри, races, free spins, колеса фортуни — у високонавантаженому казино-продукті.",
  "work.m2.tag": "iGaming · Аналітика",
  "work.m2.title": "Real-time аналітичний дашборд",
  "work.m2.text": "Живі дані, перетворені на стратегічні дашборди для комерційних і технічних команд.",
  "work.m3.tag": "iGaming · B2B",
  "work.m3.title": "B2B партнерський портал",
  "work.m3.text": "Аналітичний портал, де партнери відстежують показники клієнтів, на тій самій високонавантаженій React-основі.",
  "work.m4.tag": "Fintech · Банкінг",
  "work.m4.title": "Інтернет-банкінг для підприємців",
  "work.m4.text": "Багатомовний, орієнтований на надійність фронтенд для платформи корпоративного банкінгу великого банку.",
  "work.m5.tag": "E-commerce",
  "work.m5.title": "Високонавантажені онлайн-магазини",
  "work.m5.text": "SSR React-фронтенди поверх PHP-сервісів з чергами та пошуком через Elasticsearch, на великих e-commerce платформах.",
  "work.m6.tag": "Мобайл · React Native",
  "work.m6.title": "Кросплатформні мобільні застосунки",
  "work.m6.text": "Застосунок для водіїв і відео Q&A застосунок для iOS та Android — камера, відео, GraphQL.",

  // ---- Contact ----
  "contact.title": "Контакти — Novacode Tech",
  "contact.hero.kicker": "Контакти",
  "contact.hero.title": "Збудуймо щось разом.",
  "contact.hero.lead": "Розкажіть про свою платформу, гру чи складну фронтенд-задачу. Відповідаємо швидко.",
  "contact.email.label": "Email",
  "contact.linkedin.label": "LinkedIn",
  "contact.telegram.label": "Telegram",
  "contact.button": "Написати нам email",

  "contact.company.title": "Дані компанії",
  "contact.company.name": "Юридична назва",
  "contact.company.ico": "Ідент. номер (IČO)",
  "contact.company.dic": "Податковий номер (DIČ)",
  "contact.company.vat": "Номер ПДВ (VAT)",
  "contact.company.form": "Правова форма",
  "contact.company.formValue": "Товариство з обмеженою відповідальністю (s.r.o.)",
  "contact.company.seat": "Юридична адреса",
  "contact.company.reg": "Реєстрація",
  "contact.company.regValue":
    "Комерційний реєстр, Міський суд Братислава III · Розділ Sro, запис 187106/B",

  "footer.built": "Зроблено в Братиславі.",
};

export const dict: Record<Lang, Record<TKey, string>> = { en, sk, uk };
