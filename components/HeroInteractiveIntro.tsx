import Image from "next/image";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import {
  GOOGLE_MAPS_URL,
  buildWhatsappLink,
  images,
  whatsappMessages,
} from "@/lib/site";

export function HeroInteractiveIntro() {
  return (
    <section
      id="topo"
      className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-neutral-950 pt-16 text-white md:min-h-[calc(100svh-80px)] md:pt-20"
      aria-label="Jutsu Sushi"
    >
      <Image
        src={images.heroIntro}
        alt="Preparo de sushi no Jutsu Sushi"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="scale-[1.04] animate-[heroImageSettle_1200ms_cubic-bezier(0.22,1,0.36,1)_both] object-cover object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(8,8,8,0.58)_42%,rgba(8,8,8,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(224,66,34,0.2),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="container-page relative z-10 flex min-h-[calc(100svh-64px)] items-end pb-12 pt-12 md:min-h-[calc(100svh-80px)] md:items-center md:pb-14">
        <div className="max-w-3xl">
          <div className="animate-[heroCopyIn_900ms_cubic-bezier(0.22,1,0.36,1)_220ms_both]">
            <Image
              src={images.logo}
              alt="Jutsu Sushi"
              width={210}
              height={82}
              priority
              className="mb-7 h-auto w-[154px] drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)] md:w-[196px]"
            />
            <p className="text-sm font-black uppercase tracking-[0.08em] text-white/74">
              {JUTSU_CONFIG.googleCategory} · Araguaina - TO
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] md:text-7xl">
              O melhor da culinaria japonesa em Araguaina.
            </h1>
            <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-white/78 md:text-xl">
              Peca pelo WhatsApp, conheca o Jutsu Sushi e aproveite uma
              experiencia japonesa com excelente custo-beneficio.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:flex">
            <a
              href={buildWhatsappLink(whatsappMessages.heroOrder)}
              className="btn btn-primary animate-[heroCopyIn_900ms_cubic-bezier(0.22,1,0.36,1)_420ms_both]"
              target="_blank"
              rel="noreferrer"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              className="btn border border-white/28 bg-white/12 text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950 animate-[heroCopyIn_900ms_cubic-bezier(0.22,1,0.36,1)_520ms_both]"
              target="_blank"
              rel="noreferrer"
            >
              Ver localizacao
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
