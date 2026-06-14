import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { I18nProvider } from "./i18n/I18nContext";
import { FluidBackground } from "./components/FluidBackground";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { OrgJsonLd } from "./seo/OrgJsonLd";

/** Reset scroll to top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Root layout shared by every route (provider + chrome + <Outlet/>). */
export function Layout() {
  return (
    <I18nProvider>
      <OrgJsonLd />
      <FluidBackground />
      <ScrollToTop />
      <div className="page">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
