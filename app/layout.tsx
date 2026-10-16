import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favore® — Sites web, applications & automatisations",
  description: "Favore conçoit des sites web professionnels, des applications et des automatisations sur mesure. Une approche claire, des interfaces soignées et des solutions digitales pensées autour de vos besoins.",
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  openGraph: {
    title: "Favore® — Sites web, applications & automatisations",
    description: "Création de sites web professionnels, applications et automatisations sur mesure. Des solutions digitales utiles, soignées et pensées pour vos objectifs.",
    type: "website",
    locale: "fr_FR",
    siteName: "Favore"
  },
  twitter: {
    card: "summary_large_image",
    title: "Favore® — Sites web, applications & automatisations",
    description: "Création de sites web professionnels, applications et automatisations sur mesure. Des solutions digitales utiles, soignées et pensées pour vos objectifs."
  }
};

export const viewport: Viewport = { themeColor: "#070a0d", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
