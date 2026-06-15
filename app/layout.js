import { Analytics } from "@vercel/analytics/next";
import DynamicBackground from "@/components/DynamicBackground";
import "./globals.css";

export const metadata = {
  title: "Alexandre Pastore | Acadêmico de T.I. & Instrutor FitDance",
  description:
    "Portfólio de Alexandre Pastore — onde a precisão técnica encontra o olhar criativo. Projetos, competências, formação e contato.",
  keywords: [
    "Alexandre Pastore",
    "portfólio",
    "T.I.",
    "desenvolvedor",
    "Sistemas de Informação",
    "FitDance",
  ],
  authors: [{ name: "Alexandre Pastore" }],
  openGraph: {
    title: "Alexandre Pastore | Portfólio",
    description:
      "Onde a precisão técnica encontra o olhar criativo. Projetos, competências, formação e contato.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0d0f13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rajdhani:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DynamicBackground />
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-vignette" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
