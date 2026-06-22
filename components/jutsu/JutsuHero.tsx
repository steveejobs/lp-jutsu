import Image from "next/image";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import {
  GOOGLE_MAPS_URL,
  buildWhatsappLink,
  images,
  whatsappMessages,
} from "@/lib/site";
import { JutsuHomeAnimation } from "./JutsuHomeAnimation";
import { JutsuHomeAnimationSlot } from "./JutsuHomeAnimationSlot";

export function JutsuHero() {
  return (
    <section
      id="topo"
      className="jutsu-home-hero relative isolate min-h-[100svh] overflow-hidden bg-[#090909] pt-[78px] text-white md:pt-[90px]"
      aria-label="Jutsu Sushi"
    >
      <JutsuHomeAnimationSlot className="!absolute inset-0 z-0">
        <JutsuHomeAnimation />
      </JutsuHomeAnimationSlot>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(216,58,36,0.16),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.78)_0%,rgba(8,8,8,0.5)_42%,rgba(8,8,8,0.28)_100%)] md:bg-[linear-gradient(90deg,rgba(5,5,5,0.72)_0%,rgba(8,8,8,0.4)_42%,rgba(8,8,8,0.18)_100%)]" />
      <div className="absolute inset-0 jutsu-home-hero-grid opacity-[0.16]" />
      <div className="absolute left-[-12vw] top-[18%] h-[42vh] w-[34vw] rounded-full bg-[rgba(216,58,36,0.12)] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#161616] via-[#090909]/78 to-transparent" />

      <div className="container-page relative z-10 flex min-h-[calc(100svh-78px)] items-end pb-32 pt-10 md:min-h-[calc(100svh-90px)] md:items-center md:pb-28">
        <div className="jutsu-home-hero-content min-w-0 max-w-[760px]">
          <div className="relative mb-7 flex w-[190px] items-center overflow-visible py-1 md:w-[246px]">
            <Image
              src={images.logo}
              alt="Jutsu Sushi"
              width={240}
              height={94}
              priority
              className="jutsu-home-hero-logo h-auto w-full object-contain drop-shadow-[0_18px_42px_rgba(0,0,0,0.62)]"
            />
          </div>

          <p className="max-w-md text-xs font-black uppercase tracking-[0.18em] text-white/68 md:text-sm">
            {JUTSU_CONFIG.googleCategory} · Araguaína - TO
          </p>

          <h1 className="mt-5 max-w-[740px] text-[3rem] font-black leading-[0.98] tracking-[-0.02em] text-white md:text-7xl md:leading-[0.98] lg:text-[5.35rem]">
            O melhor da culinária japonesa em Araguaína.
          </h1>

          <p className="mt-6 max-w-[600px] text-lg font-bold leading-8 text-white/78 md:text-xl">
            Sushi, combinados e pedidos pelo WhatsApp com excelente
            custo-benefício.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:items-center">
            <a
              href={buildWhatsappLink(whatsappMessages.heroOrder)}
              className="btn btn-primary jutsu-home-hero-cta jutsu-home-hero-cta--primary"
              target="_blank"
              rel="noreferrer"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              className="btn jutsu-home-hero-cta jutsu-home-hero-cta--secondary border border-white/22 bg-white/10 text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950"
              target="_blank"
              rel="noreferrer"
            >
              Ver localização
            </a>
          </div>
        </div>
      </div>

      <div className="container-page absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
        <div className="jutsu-home-proof grid gap-4 rounded-lg border border-white/10 bg-[#171717]/92 p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center md:p-5">
          <div>
            <p className="text-base font-black text-white md:text-lg">
              <span className="text-[var(--jutsu-red)]">★★★★★</span>{" "}
              {JUTSU_CONFIG.googleRating} no Google ·{" "}
              {JUTSU_CONFIG.googleReviews} avaliações
            </p>
            <p className="mt-1 text-sm font-bold text-white/62">
              {JUTSU_CONFIG.googleCategory} · Araguaína - TO
            </p>
          </div>
          <div className="hidden h-px w-40 bg-[linear-gradient(90deg,rgba(216,58,36,0),rgba(216,58,36,0.8),rgba(255,137,54,0))] md:block" />
        </div>
      </div>
    </section>
  );
}
