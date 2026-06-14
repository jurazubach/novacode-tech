import { useI18n } from "../i18n/I18nContext";
import { Seo } from "../seo/Seo";
import { Reveal } from "../components/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import { StackMarquee } from "../components/StackMarquee";
import { FLAGSHIP_STACKS } from "../data/work";
import type { TKey } from "../i18n/dict";

const FLAGSHIP: { num: string; id: keyof typeof FLAGSHIP_STACKS; tag: TKey; title: TKey; text: TKey }[] = [
  { num: "01", id: "f1", tag: "work.f1.tag", title: "work.f1.title", text: "work.f1.text" },
  { num: "02", id: "f2", tag: "work.f2.tag", title: "work.f2.title", text: "work.f2.text" },
  { num: "03", id: "f3", tag: "work.f3.tag", title: "work.f3.title", text: "work.f3.text" },
];

const MORE: { tag: TKey; title: TKey; text: TKey }[] = [
  { tag: "work.m1.tag", title: "work.m1.title", text: "work.m1.text" },
  { tag: "work.m2.tag", title: "work.m2.title", text: "work.m2.text" },
  { tag: "work.m3.tag", title: "work.m3.title", text: "work.m3.text" },
  { tag: "work.m4.tag", title: "work.m4.title", text: "work.m4.text" },
  { tag: "work.m5.tag", title: "work.m5.title", text: "work.m5.text" },
  { tag: "work.m6.tag", title: "work.m6.title", text: "work.m6.text" },
];

export function Work() {
  const { t } = useI18n();

  return (
    <>
      <Seo titleKey="work.title" descKey="work.hero.lead" />
      <section className="hero">
        <div className="wrap">
          <p className="kicker">{t("work.hero.kicker")}</p>
          <h1 className="hero-grad">{t("work.hero.title")}</h1>
          <p className="lead">{t("work.hero.lead")}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>{t("work.flagship.title")}</h2>
          </Reveal>
          <div className="case-list">
            {FLAGSHIP.map((c) => (
              <Reveal as="article" className="case" key={c.num}>
                <div className="case-head">
                  <span className="num">{c.num}</span>
                  <span className="tag">{t(c.tag)}</span>
                </div>
                <h3>{t(c.title)}</h3>
                <p>{t(c.text)}</p>
                <div className="case-stack">
                  <StackMarquee items={FLAGSHIP_STACKS[c.id]} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>{t("work.more.title")}</h2>
          </Reveal>
          <div className="grid grid-3">
            {MORE.map((m) => (
              <Reveal as="article" className="card" key={m.title}>
                <span className="tag">{t(m.tag)}</span>
                <h3>{t(m.title)}</h3>
                <p>{t(m.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
