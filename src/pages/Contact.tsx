import { useI18n } from "../i18n/I18nContext";
import { Seo } from "../seo/Seo";
import { Reveal } from "../components/Reveal";
import type { TKey } from "../i18n/dict";

const EMAIL = "jurazubach@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/yurii-zubach-8814b8b9/";
const TELEGRAM = "https://t.me/JuraZubach";

const ABOUT: TKey[] = ["about.p1", "about.p2", "about.p3", "about.p4"];

const VALUES: { title: TKey; text: TKey }[] = [
  { title: "howwework.v1.title", text: "howwework.v1.text" },
  { title: "howwework.v2.title", text: "howwework.v2.text" },
  { title: "howwework.v3.title", text: "howwework.v3.text" },
];

export function Contact() {
  const { t } = useI18n();

  return (
    <>
      <Seo titleKey="contact.title" descKey="contact.hero.lead" />
      <section className="hero">
        <div className="wrap">
          <p className="kicker">{t("contact.hero.kicker")}</p>
          <h1 className="hero-grad">{t("contact.hero.title")}</h1>
          <p className="lead">{t("contact.hero.lead")}</p>
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
            <h2>{t("howwework.title")}</h2>
          </Reveal>
          <div className="grid grid-3">
            {VALUES.map((v) => (
              <Reveal as="article" className="card" key={v.title}>
                <h3>{t(v.title)}</h3>
                <p>{t(v.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>{t("contact.reach.title")}</h2>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="card">
              <div className="contact-actions">
                <div className="contact-line">
                  <span className="k">{t("contact.email.label")}</span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="contact-line">
                  <span className="k">{t("contact.linkedin.label")}</span>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/yurii-zubach
                  </a>
                </div>
                <div className="contact-line">
                  <span className="k">{t("contact.telegram.label")}</span>
                  <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                    @JuraZubach
                  </a>
                </div>
                <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                  {t("contact.button")} <span className="arrow">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal className="card">
              <h3>{t("contact.company.title")}</h3>
              <dl className="dl">
                <dt>{t("contact.company.name")}</dt>
                <dd>Novacode Tech s.r.o.</dd>
                <dt>{t("contact.company.ico")}</dt>
                <dd>56 902 514</dd>
                <dt>{t("contact.company.dic")}</dt>
                <dd>2122496332</dd>
                <dt>{t("contact.company.vat")}</dt>
                <dd>SK2122496332</dd>
                <dt>{t("contact.company.form")}</dt>
                <dd>{t("contact.company.formValue")}</dd>
                <dt>{t("contact.company.seat")}</dt>
                <dd>Lermontovova 911/3, 811 05 Bratislava – Staré Mesto, Slovakia</dd>
                <dt>{t("contact.company.reg")}</dt>
                <dd>{t("contact.company.regValue")}</dd>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
