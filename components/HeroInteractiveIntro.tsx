import Image from "next/image";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import {
  GOOGLE_MAPS_URL,
  buildWhatsappLink,
  images,
  whatsappMessages,
} from "@/lib/site";

const revealShapes = [
  {
    key: "main",
    className: "jutsu-hero-organic-shape jutsu-hero-organic-shape--main",
    d: "M34.8 27.4C50.8 18.8 72.9 24.2 81.8 39.8C91.1 56.2 79.3 76.8 58.2 83.1C39.4 88.7 19.6 79.3 15.4 62.7C11.7 48 23.4 33.5 34.8 27.4Z",
  },
  {
    key: "right",
    className: "jutsu-hero-organic-shape jutsu-hero-organic-shape--right",
    d: "M65.5 17.8C82.7 16.5 95.1 31.5 94.2 50.4C93.2 70.4 77.8 87.2 58.7 84.2C43.4 81.8 37.1 67.3 41.2 53.2C45.6 38.4 51.8 18.9 65.5 17.8Z",
  },
  {
    key: "lower",
    className: "jutsu-hero-organic-shape jutsu-hero-organic-shape--lower",
    d: "M31.3 56.8C47.8 45.1 73.1 51.7 80.7 68.9C88.4 86.5 72.8 102.2 49.8 100.4C27.5 98.7 8.9 87.6 9.3 72.8C9.7 61.4 20.8 64.3 31.3 56.8Z",
  },
];

function RevealShapeLayer() {
  return (
    <g filter="url(#jutsu-hero-soft-edge)">
      {revealShapes.map((shape) => (
        <path key={shape.key} className={shape.className} d={shape.d} />
      ))}
    </g>
  );
}

function JutsuHeroOrganicReveal() {
  return (
    <div className="jutsu-hero-organic-reveal" aria-hidden="true">
      <svg
        className="jutsu-hero-organic-reveal__svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <pattern
            id="jutsu-hero-cut-pattern"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-4 18 18 -4M7 22 22 7"
              fill="none"
              stroke="#ff7a35"
              strokeOpacity="0.18"
              strokeWidth="0.18"
            />
          </pattern>
          <pattern
            id="jutsu-hero-graphite-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0H0V28"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.16"
              strokeWidth="0.12"
            />
          </pattern>
          <filter
            id="jutsu-hero-soft-edge"
            x="-18"
            y="-18"
            width="136"
            height="136"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="1.25" />
          </filter>
          <mask id="jutsu-hero-cover-mask" maskUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="white" />
            <RevealShapeLayer />
          </mask>
        </defs>
        <rect
          className="jutsu-hero-cover"
          width="100"
          height="100"
          mask="url(#jutsu-hero-cover-mask)"
        />
        <rect
          className="jutsu-hero-cut-pattern"
          width="100"
          height="100"
          fill="url(#jutsu-hero-cut-pattern)"
          mask="url(#jutsu-hero-cover-mask)"
        />
        <rect
          className="jutsu-hero-grid-pattern"
          width="100"
          height="100"
          fill="url(#jutsu-hero-graphite-grid)"
          mask="url(#jutsu-hero-cover-mask)"
        />
      </svg>
    </div>
  );
}

export function HeroInteractiveIntro() {
  return (
    <section
      id="topo"
      className="jutsu-hero-stage relative isolate min-h-[calc(100svh-64px)] overflow-hidden bg-neutral-950 pt-16 text-white md:min-h-[calc(100svh-80px)] md:pt-20"
      aria-label="Jutsu Sushi"
    >
      <Image
        src={images.heroIntro}
        alt="Preparo de sushi no Jutsu Sushi"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="absolute inset-0 scale-[1.045] animate-[jutsuHeroImageSettle_2200ms_cubic-bezier(0.22,1,0.36,1)_both] object-cover object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(9,9,9,0.66)_42%,rgba(9,9,9,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(216,58,36,0.24),transparent_38%)]" />
      <div className="absolute right-[-12vw] top-[17%] h-[48vh] w-[34vw] rotate-[-17deg] bg-[linear-gradient(180deg,rgba(216,58,36,0.24),rgba(255,126,47,0.06),transparent)]" />
      <div className="absolute left-0 top-[24%] h-px w-[42vw] origin-left animate-[lineSweep_4.8s_ease-in-out_800ms_infinite] bg-[linear-gradient(90deg,rgba(216,58,36,0),rgba(216,58,36,0.95),rgba(255,139,65,0))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

      <JutsuHeroOrganicReveal />

      <div className="container-page relative z-40 flex min-h-[calc(100svh-64px)] items-end pb-12 pt-12 md:min-h-[calc(100svh-80px)] md:items-center md:pb-14">
        <div className="jutsu-hero-copy max-w-3xl">
          <Image
            src={images.logo}
            alt="Jutsu Sushi"
            width={210}
            height={82}
            priority
            className="mb-7 h-auto w-[154px] drop-shadow-[0_10px_26px_rgba(0,0,0,0.42)] md:w-[196px]"
          />
          <p className="text-sm font-black uppercase tracking-[0.08em] text-white/74">
            {JUTSU_CONFIG.googleCategory} · Araguaína - TO
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] md:text-7xl">
            O melhor da culinária japonesa em Araguaína.
          </h1>
          <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-white/78 md:text-xl">
            Sushi, combinados e pedidos pelo WhatsApp com excelente
            custo-benefício.
          </p>

          <div className="mt-8 grid gap-3 sm:flex">
            <a
              href={buildWhatsappLink(whatsappMessages.heroOrder)}
              className="btn btn-primary jutsu-hero-cta jutsu-hero-cta--primary relative overflow-hidden"
              target="_blank"
              rel="noreferrer"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              className="btn jutsu-hero-cta jutsu-hero-cta--secondary border border-white/28 bg-white/12 text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950"
              target="_blank"
              rel="noreferrer"
            >
              Ver localização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
