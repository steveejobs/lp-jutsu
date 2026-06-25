"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { jutsuExperienceItems } from "@/data/jutsu-media";
import { GOOGLE_MAPS_URL, buildWhatsappLink } from "@/lib/site";

export function JutsuExperienceSelectorClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = jutsuExperienceItems[activeIndex];

  const activeHref = useMemo(() => {
    if (activeItem.action === "location") return GOOGLE_MAPS_URL;
    return buildWhatsappLink(activeItem.message);
  }, [activeItem]);

  return (
    <section
      id="escolha-seu-jutsu"
      className="relative overflow-visible bg-[#070707] py-12 text-white md:py-20"
    >
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(216,58,36,0.13)_1px,transparent_1px)] [background-size:46px_46px,112px_112px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,126,47,0.72),transparent)]" />
      <div className="absolute left-0 top-10 h-px w-32 origin-left animate-[lineSweep_5.2s_ease-in-out_infinite] bg-[linear-gradient(90deg,var(--jutsu-red),rgba(255,139,65,0))] md:w-64" />

      <div className="container-page relative z-10">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="min-w-0">
            <span className="eyebrow">Experi{"\u00ea"}ncia</span>
            <h2 className="mt-4 whitespace-normal text-4xl font-black leading-[1.08] [overflow-wrap:normal] [word-break:normal] md:text-6xl md:leading-[1.04]">
              Escolha seu Jutsu.
            </h2>
          </div>
          <p className="min-w-0 max-w-xl whitespace-normal text-base font-semibold leading-7 text-white/68 [overflow-wrap:normal] [word-break:normal] md:justify-self-end md:text-lg">
            Cada pedido tem um caminho: delivery, combinados, pe{"\u00e7"}as
            quentes ou uma visita ao Jutsu.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 w-[min(calc(100%_-_32px),1320px)] min-w-0 overflow-visible rounded-lg border border-white/12 bg-[#0b0b0b] shadow-[0_34px_120px_rgba(0,0,0,0.52)] md:mt-10 max-[480px]:w-[min(calc(100%_-_24px),1320px)]">
        <div className="grid w-full min-w-0 lg:min-h-[660px] lg:grid-cols-[24%_minmax(0,48%)_minmax(360px,1fr)]">
          <div className="min-w-0 border-b border-white/10 bg-[#0d0d0d] p-3 lg:border-b-0 lg:border-r lg:p-4">
            <div className="no-scrollbar flex w-full min-w-0 gap-2 overflow-x-auto px-1 pb-2 lg:relative lg:grid lg:h-full lg:grid-rows-5 lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 hidden w-1.5 rounded-full bg-[linear-gradient(180deg,#ff8a3d,var(--jutsu-red))] shadow-[0_0_28px_rgba(216,58,36,0.48)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block"
                style={{
                  height: "20%",
                  transform: `translateY(${activeIndex * 100}%)`,
                }}
              />
              {jutsuExperienceItems.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative shrink-0 whitespace-nowrap rounded-full border px-4 py-3 text-left text-sm font-black leading-snug [overflow-wrap:normal] [word-break:normal] transition duration-300 lg:flex lg:h-full lg:w-full lg:min-w-0 lg:items-center lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-b lg:border-white/8 lg:py-0 lg:pl-6 lg:pr-4 lg:text-base ${
                      isActive
                        ? "border-[#ff6b35] bg-[linear-gradient(135deg,var(--jutsu-red),#ff7a35)] text-white shadow-[0_14px_34px_rgba(216,58,36,0.34)] lg:bg-white/[0.095] lg:bg-none lg:text-white lg:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : "border-white/12 bg-white/[0.045] text-white/62 hover:border-[#ff7a35]/45 hover:bg-white/[0.07] hover:text-white lg:bg-transparent"
                    }`}
                    aria-pressed={isActive}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative h-[420px] min-w-0 overflow-hidden bg-black sm:h-[480px] lg:h-auto lg:min-h-full">
            <Image
              key={activeItem.image.src}
              src={activeItem.image.src}
              alt={activeItem.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              quality={90}
              loading="lazy"
              className="animate-[jutsuImageIn_560ms_cubic-bezier(0.22,1,0.36,1)_both] object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_40%,transparent,rgba(0,0,0,0.34)),linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]" />
            <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#0b0b0b] to-transparent lg:hidden" />
          </div>

          <div className="relative flex min-w-0 items-end overflow-visible border-t border-white/10 bg-[#101010] p-5 lg:min-h-0 lg:border-l lg:border-t-0 lg:p-8 xl:p-9">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-24 skew-x-[-15deg] bg-[linear-gradient(180deg,rgba(255,126,47,0.36),rgba(216,58,36,0.14),transparent)] opacity-80"
            />
            <div
              key={activeItem.key}
              className="relative z-10 w-full min-w-0 max-w-[520px] animate-[jutsuCopyIn_480ms_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--jutsu-red)]">
                Escolha ativa
              </p>
              <h3 className="mt-4 max-w-[520px] whitespace-normal hyphens-none text-3xl font-black leading-snug [overflow-wrap:normal] [word-break:normal] lg:text-[2.8rem] lg:leading-tight xl:text-5xl">
                {activeItem.title}
              </h3>
              <p className="mt-4 max-w-[520px] whitespace-normal hyphens-none text-base font-semibold leading-7 text-white/72 [overflow-wrap:normal] [word-break:normal]">
                {activeItem.text}
              </p>
              <a
                href={activeHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-7 w-full whitespace-normal hyphens-none shadow-[0_20px_54px_rgba(216,58,36,0.38)] [overflow-wrap:normal] [word-break:normal]"
              >
                {activeItem.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
