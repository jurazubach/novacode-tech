import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dict, type Lang, type TKey } from "./dict";

const STORAGE_KEY = "novacode-lang";
const SUPPORTED: Lang[] = ["en", "sk", "uk"];

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TKey) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

const DEFAULT_LANG: Lang = "en";

// Client-only: the user's saved or browser-preferred language.
function detectClientLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage may be unavailable */
  }
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase() as Lang;
  return SUPPORTED.includes(nav) ? nav : DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // First render must equal the prerendered HTML (DEFAULT_LANG) to hydrate
  // cleanly; switch to the user's language right after mount.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const detected = detectClientLang();
    setLangState((prev) => (prev === detected ? prev : detected));
  }, []);

  const setLang = useCallback((next: Lang) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key: TKey) => dict[lang][key] ?? dict.en[key] ?? key, [lang]);

  const value = useMemo<I18nValue>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
