import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favore® — Sites web, applications & automatisations",
  description: "Favore conçoit des sites web, des applications et des automatisations sur mesure : des solutions digitales utiles, soignées et pensées autour de vos besoins.",
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  openGraph: {
    title: "Favore® — Sites web, applications & automatisations",
    description: "Sites web, produits digitaux et automatisations conçus avec intention, précision et simplicité.",
    type: "website",
    locale: "fr_FR",
    siteName: "Favore"
  },
  twitter: {
    card: "summary_large_image",
    title: "Favore® — Sites web, applications & automatisations",
    description: "Sites web, produits digitaux et automatisations conçus avec intention, précision et simplicité."
  }
};

export const viewport: Viewport = { themeColor: "#070a0d", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
