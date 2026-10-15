import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favore® — Sites web, applications & automatisations",
  description: "Favore conçoit des sites web, des applications et des automatisations sur mesure : des solutions digitales utiles, soignées et pensées autour de vos besoins.",
  metadataBase: new URL("https://favore.fr"),
  openGraph: {
    title: "Favore® — Sites web, applications & automatisations",
    description: "Sites web, produits digitaux et automatisations conçus avec intention, précision et simplicité.",
    type: "website",
    locale: "fr_FR"
  }
};

export const viewport: Viewport = { themeColor: "#070a0d", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
