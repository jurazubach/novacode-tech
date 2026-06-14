import { useI18n } from "../i18n/I18nContext";
import { Seo } from "../seo/Seo";
import { Reveal } from "../components/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import type { TKey } from "../i18n/dict";

const ABOUT: TKey[] = ["about.p1", "about.p2", "about.p3", "about.p4"];

const STACK: { name: TKey; list: TKey }[] = [
  { name: "expertise.stack.frontend", list: "expertise.stack.frontendList" },
  { name: "expertise.stack.games", list: "expertise.stack.gamesList" },
  { name: "expertise.stack.backend", list: "expertise.stack.backendList" },
  { name: "expertise.stack.ai", list: "expertise.stack.aiList" },
  { name: "expertise.stack.tooling", list: "expertise.stack.toolingList" },
];

const TIMELINE: { period: TKey; role: TKey; text: TKey }[] = [
  { period: "exp.playson.period", role: "exp.playson.role", text: "exp.playson.text" },
  { period: "exp.htmlacademy.period", role: "exp.htmlacademy.role", text: "exp.htmlacademy.text" },
  { period: "exp.signnow.period", role: "exp.signnow.role", text: "exp.signnow.text" },
  { period: "exp.luxoft.period", role: "exp.luxoft.role", text: "exp.luxoft.text" },
  { period: "exp.leboutique.period", role: "exp.leboutique.role", text: "exp.leboutique.text" },
  { period: "exp.updg.period", role: "exp.updg.role", text: "exp.updg.text" },
  { period: "exp.bvblogic.period", role: "exp.bvblogic.role", text: "exp.bvblogic.text" },
];

export function Expertise() {
  const { t } = useI18n();

  return (
    <>
      <Seo titleKey="expertise.title" descKey="expertise.hero.lead" />
      <section className="hero">
        <div className="wrap">
          <p className="kicker">{t("expertise.hero.kicker")}</p>
          <h1 className="hero-grad">{t("expertise.hero.title")}</h1>
          <p className="lead">{t("expertise.hero.lead")}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>{t("about.title")}</h2>
          </Reveal>
          <Reveal className="prose">
            {ABOUT.map((p) => (
              <p key={p}>{t(p)}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>{t("expertise.stack.title")}</h2>
          </Reveal>
          <div className="stack-grid">
            {STACK.map((s) => (
              <Reveal className="stack-item" key={s.name}>
                <div className="name">{t(s.name)}</div>
                <div className="list">{t(s.list)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <h2>{t("expertise.timeline.title")}</h2>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <Reveal className="tl-item" key={item.role}>
                <div className="period">{t(item.period)}</div>
                <div className="role">{t(item.role)}</div>
                <p>{t(item.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
