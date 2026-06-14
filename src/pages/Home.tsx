import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { Seo } from "../seo/Seo";
import { Reveal } from "../components/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import type { TKey } from "../i18n/dict";

const STATS: { num: string; label: TKey }[] = [
  { num: "~10", label: "home.stats.experience" },
  { num: "5+", label: "home.stats.industries" },
  { num: "60+", label: "home.stats.packages" },
  { num: "100M", label: "home.stats.simulation" },
  { num: "30+", label: "home.stats.sources" },
  { num: "17+", label: "home.stats.markets" },
];

interface ServiceCard {
  idx: string;
  title: TKey;
  text: TKey;
  items: TKey[];
}

const SERVICES: ServiceCard[] = [
  { idx: "01", title: "services.s1.title", text: "services.s1.text", items: ["services.s1.li1", "services.s1.li2", "services.s1.li3", "services.s1.li4"] },
  { idx: "02", title: "services.s2.title", text: "services.s2.text", items: ["services.s2.li1", "services.s2.li2", "services.s2.li3", "services.s2.li4"] },
  { idx: "03", title: "services.s3.title", text: "services.s3.text", items: ["services.s3.li1", "services.s3.li2", "services.s3.li3", "services.s3.li4"] },
  { idx: "04", title: "services.s4.title", text: "services.s4.text", items: ["services.s4.li1", "services.s4.li2", "services.s4.li3", "services.s4.li4"] },
  { idx: "05", title: "services.s5.title", text: "services.s5.text", items: ["services.s5.li1", "services.s5.li2", "services.s5.li3", "services.s5.li4"] },
  { idx: "06", title: "services.s6.title", text: "services.s6.text", items: ["services.s6.li1", "services.s6.li2", "services.s6.li3"] },
];

export function Home() {
  const { t } = useI18n();

  return (
    <>
      <Seo titleKey="home.title" descKey="home.hero.lead" />

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <p className="kicker">{t("home.hero.kicker")}</p>
          <h1>{t("home.hero.title")}</h1>
          <p className="lead">{t("home.hero.lead")}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              {t("cta.contact")} <span className="arrow">→</span>
            </Link>
            <a className="btn" href="#build">
              {t("cta.services")}
            </a>
          </div>
          <p className="hero-note">{t("home.hero.note")}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{t(s.label)}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What we build — the full service detail (formerly a separate page) */}
      <section id="build" className="anchor-section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{t("home.what.kicker")}</p>
            <h2>{t("home.what.title")}</h2>
            <p className="lead">{t("home.what.lead")}</p>
          </Reveal>
          <div className="grid grid-2">
            {SERVICES.map((s) => (
              <Reveal as="article" className="card" key={s.idx}>
                <span className="idx">{s.idx}</span>
                <h3>{t(s.title)}</h3>
                <p>{t(s.text)}</p>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{t(it)}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
