import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { Seo } from "../seo/Seo";
import { Reveal } from "../components/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import type { TKey } from "../i18n/dict";

const STATS: { num: string; label: TKey }[] = [
  { num: "~10", label: "home.stats.experience" },
  { num: "17+", label: "home.stats.markets" },
  { num: "60+", label: "home.stats.packages" },
  { num: "3", label: "home.stats.crm" },
];

const CARDS: { idx: string; title: TKey; text: TKey }[] = [
  { idx: "01", title: "home.card.web.title", text: "home.card.web.text" },
  { idx: "02", title: "home.card.game.title", text: "home.card.game.text" },
  { idx: "03", title: "home.card.backend.title", text: "home.card.backend.text" },
  { idx: "04", title: "home.card.ai.title", text: "home.card.ai.text" },
];

export function Home() {
  const { t } = useI18n();

  return (
    <>
      <Seo titleKey="home.title" descKey="home.hero.lead" />
      <section className="hero">
        <div className="wrap">
          <p className="kicker">{t("home.hero.kicker")}</p>
          <h1>{t("home.hero.title")}</h1>
          <p className="lead">{t("home.hero.lead")}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              {t("cta.contact")} <span className="arrow">→</span>
            </Link>
            <Link className="btn" to="/services">
              {t("cta.services")}
            </Link>
          </div>
          <p className="hero-note">{t("home.hero.note")}</p>
        </div>
      </section>

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

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{t("home.what.kicker")}</p>
            <h2>{t("home.what.title")}</h2>
            <p className="lead">{t("home.what.lead")}</p>
          </Reveal>
          <div className="grid grid-2">
            {CARDS.map((c) => (
              <Reveal as="article" className="card" key={c.idx}>
                <span className="idx">{c.idx}</span>
                <h3>{t(c.title)}</h3>
                <p>{t(c.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
