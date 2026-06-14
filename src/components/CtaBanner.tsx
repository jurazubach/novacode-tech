import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { Reveal } from "./Reveal";

/** Reusable "let's work together" banner used at the foot of most pages. */
export function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal className="cta">
          <h2>{t("home.cta.title")}</h2>
          <p className="lead">{t("home.cta.text")}</p>
          <Link className="btn btn-primary" to="/contact">
            {t("cta.contact")} <span className="arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
