import type { Metadata } from "next";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import { logoMedia } from "@/data/jutsu-media";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(JUTSU_CONFIG.fullSiteUrl),
  title: "Jutsu Sushi | Culinaria Japonesa em Araguaina",
  description:
    "Peca pelo WhatsApp, veja a localizacao e conheca o Jutsu Sushi em Araguaina. Culinaria japonesa autentica com excelente custo-beneficio.",
  icons: {
    icon: [
      {
        url: "/jutsu/favicon-jutsu.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/jutsu/favicon-jutsu.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/jutsu/favicon-jutsu.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/jutsu/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Jutsu Sushi",
    description:
      "Culinaria japonesa autentica com entrega, sabor e excelente custo-beneficio em Araguaina.",
    url: JUTSU_CONFIG.fullSiteUrl,
    images: [
      {
        url: logoMedia.src,
        width: 1200,
        height: 630,
        alt: "Jutsu Sushi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
