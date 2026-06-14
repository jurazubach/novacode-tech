import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import type { Lang, TKey } from "../i18n/dict";

const LINKS: { to: string; key: TKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/expertise", key: "nav.expertise" },
  { to: "/work", key: "nav.work" },
  { to: "/contact", key: "nav.contact" },
];

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "sk", label: "SK" },
  { code: "uk", label: "UK" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Primary">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="mark">Novacode</span>
          <span>Tech</span>
          <span className="tld">s.r.o.</span>
        </NavLink>

        <div className={`nav-links${open ? " is-open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-nav
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
              onClick={() => setOpen(false)}
            >
              {t(l.key)}
            </NavLink>
          ))}
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l.code} type="button" aria-pressed={lang === l.code} onClick={() => setLang(l.code)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {t("nav.menu")}
        </button>
      </nav>
    </header>
  );
}
