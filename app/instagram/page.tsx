import type { Metadata } from "next";
import Image from "next/image";
import { InstagramMediaMarquee } from "@/components/InstagramMediaMarquee";
import { InstagramTestimonialsMarquee } from "@/components/InstagramTestimonialsMarquee";
import { InstagramVideoMoment } from "@/components/InstagramVideoMoment";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import {
  instagramGalleryImages,
  logoMedia,
  scrollExperienceMedia,
} from "@/data/jutsu-media";
import { jutsuReviews } from "@/data/jutsu-reviews";
import {
  ADDRESS,
  FULL_SITE_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  OPENING_HOURS,
  createWhatsAppLink,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(FULL_SITE_URL),
  title: "Jutsu Sushi | Links",
  description:
    "Peca pelo WhatsApp, veja a localizacao ou conheca o Jutsu Sushi em Araguaina.",
  openGraph: {
    title: "Jutsu Sushi | Links",
    description:
      "Peca pelo WhatsApp, veja a localizacao ou conheca o Jutsu Sushi em Araguaina.",
    url: "/instagram",
    images: [
      {
        url: logoMedia.src,
        width: 512,
        height: 512,
        alt: "Jutsu Sushi",
      },
    ],
  },
};

const whatsappLinks = {
  pedido: createWhatsAppLink(
    "Ola, vim pelo Instagram e quero fazer um pedido no Jutsu Sushi.",
  ),
  localizacao: createWhatsAppLink(
    "Ola, vim pelo Instagram e quero saber mais sobre o Jutsu Sushi.",
  ),
};

const linkOptions = ["Delivery", "Retirada", "Jantar a noite"];
const instagramTestimonials = jutsuReviews.slice(0, 8);

function IconRoute() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 21s7-5.35 7-12A7 7 0 0 0 5 9c0 6.65 7 12 7 12Zm0-9.4A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M13.2 5.25 20 12l-6.8 6.75-1.35-1.35 4.45-4.45H4v-1.9h12.3L11.85 6.6l1.35-1.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkButton({
  href,
  children,
  icon,
  primary = false,
  delay,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  primary?: boolean;
  delay: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`ig-rise flex min-h-[56px] items-center justify-between gap-4 rounded-[18px] border px-5 text-[0.95rem] font-black transition active:scale-[0.985] ${
        primary
          ? "border-neutral-950 bg-neutral-950 text-white shadow-[0_16px_34px_rgba(16,16,16,0.16)]"
          : "border-black/10 bg-white text-neutral-950 shadow-[0_10px_26px_rgba(16,16,16,0.05)]"
      }`}
      style={{ "--ig-delay": `${delay}ms` } as React.CSSProperties}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            primary
              ? "bg-white/12 text-white"
              : "bg-[#fff1ed] text-[var(--jutsu-red)]"
          }`}
        >
          {icon}
        </span>
        {children}
      </span>
      <IconArrow />
    </a>
  );
}

export default function InstagramLinksPage() {
  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top,rgba(216,58,36,0.1),transparent_30%),linear-gradient(180deg,#fffdf9,#f2eee8)] px-4 py-5 text-neutral-950 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[28px] border border-black/8 bg-[#fffdf9]/94 px-4 py-5 shadow-[0_24px_70px_rgba(16,16,16,0.1)] backdrop-blur sm:px-5">
        <header className="ig-rise text-center">
          <Image
            src={logoMedia.src}
            alt={logoMedia.alt}
            width={210}
            height={82}
            priority
            className="mx-auto h-auto w-[172px] object-contain"
          />
          <h1 className="mt-4 text-2xl font-black leading-tight">
            Jutsu Sushi
          </h1>
          <p className="mx-auto mt-2 max-w-[20rem] text-[1.68rem] font-black leading-[1.04]">
            O melhor da culinaria japonesa em Araguaina.
          </p>
          <p className="mt-4 inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-black text-neutral-900 shadow-[0_10px_22px_rgba(16,16,16,0.04)]">
            <span className="mr-2 text-[var(--jutsu-red)]">★★★★★</span>
            {JUTSU_CONFIG.googleRating} no Google · {JUTSU_CONFIG.googleReviews}{" "}
            avaliacoes
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {linkOptions.map((option) => (
              <span
                key={option}
                className="rounded-full border border-black/10 bg-white/78 px-3 py-1.5 text-[0.68rem] font-black uppercase text-neutral-700"
              >
                {option}
              </span>
            ))}
          </div>
        </header>

        <InstagramMediaMarquee media={instagramGalleryImages} />

        <nav className="mt-5 grid gap-3" aria-label="Links principais">
          <LinkButton
            href={whatsappLinks.pedido}
            icon={<WhatsAppIcon className="h-5 w-5" />}
            primary
            delay={150}
          >
            Pedir pelo WhatsApp
          </LinkButton>
          <LinkButton href={GOOGLE_MAPS_URL} icon={<IconRoute />} delay={220}>
            Ver localizacao
          </LinkButton>
          <LinkButton href={INSTAGRAM_URL} icon={<IconInstagram />} delay={290}>
            Instagram
          </LinkButton>
          <LinkButton href={FULL_SITE_URL} icon={<IconArrow />} delay={360}>
            Site completo
          </LinkButton>
        </nav>

        <InstagramVideoMoment
          videoSrc={scrollExperienceMedia.mobileVideo}
          posterSrc={scrollExperienceMedia.background.src}
        />

        <InstagramTestimonialsMarquee reviews={instagramTestimonials} />

        <section
          className="ig-rise mt-5 rounded-[24px] bg-neutral-950 p-4 text-white shadow-[0_14px_34px_rgba(16,16,16,0.12)]"
          style={{ "--ig-delay": "640ms" } as React.CSSProperties}
        >
          <h2 className="text-2xl font-black leading-tight">
            Estamos em Araguaina.
          </h2>
          <div className="mt-3 space-y-2 text-sm font-bold leading-6 text-white/72">
            <p>{ADDRESS}</p>
            <p>{OPENING_HOURS}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-white text-sm font-black text-neutral-950 active:scale-[0.985]"
            >
              <IconRoute />
              Abrir rota
            </a>
            <a
              href={whatsappLinks.localizacao}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--jutsu-red)] text-sm font-black text-white active:scale-[0.985]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </section>

        <footer className="ig-rise mt-5 pb-1 text-center text-xs font-black text-neutral-500">
          <p>Jutsu Sushi · Araguaina - TO</p>
        </footer>
      </div>
    </main>
  );
}
