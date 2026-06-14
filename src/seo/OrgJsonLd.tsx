import { Head } from "vite-react-ssg";
import site from "../../site.config.json";

const SITE_URL = site.siteUrl.replace(/\/$/, "");

// Schema.org Organization — emitted into every prerendered page's <head>.
const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Novacode Tech s.r.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Software studio working in iGaming — high-load web platforms, HTML5 game clients, backend services, and AI tooling.",
  foundingDate: "2025-04-09",
  founder: { "@type": "Person", name: "Yurii Zubach" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lermontovova 911/3",
    postalCode: "811 05",
    addressLocality: "Bratislava",
    addressCountry: "SK",
  },
  email: "jurazubach@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/yurii-zubach-8814b8b9/",
    "https://t.me/JuraZubach",
    "https://github.com/jurazubach",
  ],
};

export function OrgJsonLd() {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(ORG)}</script>
    </Head>
  );
}
