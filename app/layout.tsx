import type { Metadata } from "next";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import { logoMedia } from "@/data/jutsu-media";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(JUTSU_CONFIG.fullSiteUrl),
  title: "Jutsu Sushi | Culinária Japonesa em Araguaína",
  description:
    "Peça pelo WhatsApp, veja a localização e conheça o Jutsu Sushi em Araguaína. Culinária japonesa autêntica com excelente custo-benefício.",
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
      "Culinária japonesa autêntica com entrega, sabor e excelente custo-benefício em Araguaína.",
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
