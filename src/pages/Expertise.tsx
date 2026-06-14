import { useI18n } from "../i18n/I18nContext";
import { Seo } from "../seo/Seo";
import { Reveal } from "../components/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import { STACK } from "../data/stack";
import type { TKey } from "../i18n/dict";

const TIMELINE: { period: TKey; title: TKey; text: TKey }[] = [
  { period: "exp.s1.period", title: "exp.s1.title", text: "exp.s1.text" },
  { period: "exp.s2.period", title: "exp.s2.title", text: "exp.s2.text" },
  { period: "exp.s3.period", title: "exp.s3.title", text: "exp.s3.text" },
  { period: "exp.s4.period", title: "exp.s4.title", text: "exp.s4.text" },
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
            <h2>{t("expertise.stack.title")}</h2>
          </Reveal>
          <div className="stack-cats">
            {STACK.map((group) => (
              <Reveal className="stack-cat" key={group.titleKey}>
                <div className="stack-cat-name">{t(group.titleKey)}</div>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li className="chip" key={item.name}>
                      {item.Icon ? (
                        <item.Icon className="chip-icon" aria-hidden />
                      ) : (
                        <span className="chip-mono" aria-hidden>{item.mono}</span>
                      )}
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
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
              <Reveal className="tl-item" key={item.title}>
                <div className="period">{t(item.period)}</div>
                <div className="role">{t(item.title)}</div>
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
