import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import type { TKey } from "../i18n/dict";
import site from "../../site.config.json";

const SITE_URL = site.siteUrl.replace(/\/$/, "");
const OG_IMAGE = `${SITE_URL}/og.svg`;

interface SeoProps {
  titleKey: TKey;
  descKey: TKey;
}

/** Per-route <head>: title, description, canonical, OpenGraph + Twitter card.
 *  Rendered into static HTML at build time and kept reactive on the client. */
export function Seo({ titleKey, descKey }: SeoProps) {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const title = t(titleKey);
  const description = t(descKey);
  const url = SITE_URL + (pathname === "/" ? "" : pathname);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Novacode Tech" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
}
