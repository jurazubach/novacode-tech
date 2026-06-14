import { useI18n } from "../i18n/I18nContext";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>© {year} Novacode Tech s.r.o.</span>
        <span>{t("footer.built")}</span>
      </div>
    </footer>
  );
}
