"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { jutsuExperienceItems } from "@/data/jutsu-media";
import { GOOGLE_MAPS_URL, buildWhatsappLink } from "@/lib/site";

export function JutsuExperienceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = jutsuExperienceItems[activeIndex];

  const activeHref = useMemo(() => {
    if (activeItem.action === "location") return GOOGLE_MAPS_URL;
    return buildWhatsappLink(activeItem.message);
  }, [activeItem]);

  return (
    <section
      id="escolha-seu-jutsu"
      className="relative overflow-hidden bg-neutral-950 py-14 text-white md:py-20"
    >
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(135deg,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(45deg,rgba(216,58,36,0.12)_1px,transparent_1px)] [background-size:42px_42px,96px_96px]" />
      <div className="absolute left-0 top-10 h-px w-32 origin-left animate-[lineSweep_5.2s_ease-in-out_infinite] bg-[linear-gradient(90deg,var(--jutsu-red),rgba(255,139,65,0))] md:w-64" />
      <div className="absolute -right-24 top-28 h-64 w-64 rounded-full bg-[var(--jutsu-red)]/14 blur-3xl" />

      <div className="container-page relative z-10">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">Experiência</span>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] md:text-6xl">
              Escolha seu Jutsu.
            </h2>
          </div>
          <p className="max-w-xl text-base font-semibold leading-7 text-white/68 md:justify-self-end md:text-lg">
            Cada pedido tem um caminho: delivery, combinados, peças quentes ou
            uma visita ao Jutsu.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-[#141414] shadow-[0_28px_90px_rgba(0,0,0,0.32)] md:mt-10">
          <div className="grid md:min-h-[560px] md:grid-cols-[330px_1fr]">
            <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r md:p-5">
              <div className="no-scrollbar flex gap-2 overflow-x-auto md:relative md:grid md:h-full md:grid-rows-5 md:gap-0 md:overflow-visible">
                <span
                  className="pointer-events-none absolute left-0 hidden w-1 rounded-full bg-[linear-gradient(180deg,var(--jutsu-red),#ff8a3d)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:block"
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
                      className={`relative shrink-0 rounded-full border px-4 py-3 text-left text-sm font-black transition duration-300 md:flex md:h-full md:w-full md:items-center md:rounded-none md:border-0 md:border-b md:border-white/8 md:py-0 md:pl-7 md:pr-4 md:text-base ${
                        isActive
                          ? "border-[var(--jutsu-red)] bg-[var(--jutsu-red)] text-white shadow-[0_12px_30px_rgba(216,58,36,0.2)] md:bg-white/[0.06] md:shadow-none"
                          : "border-white/12 bg-white/[0.04] text-white/66 hover:border-white/28 hover:text-white md:bg-transparent"
                      }`}
                      aria-pressed={isActive}
                    >
                      <span className="hidden text-xs text-[var(--jutsu-red)] md:mr-4 md:block">
                        0{index + 1}
                      </span>
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative grid gap-0 md:grid-cols-[1.02fr_0.98fr]">
              <div className="relative aspect-[4/3] overflow-hidden bg-black md:aspect-auto md:min-h-full">
                <Image
                  key={activeItem.image.src}
                  src={activeItem.image.src}
                  alt={activeItem.image.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 48vw"
                  quality={86}
                  loading="lazy"
                  className="animate-[jutsuImageIn_560ms_cubic-bezier(0.22,1,0.36,1)_both] object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_40%,transparent,rgba(0,0,0,0.42)),linear-gradient(180deg,transparent,rgba(0,0,0,0.36))]" />
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#141414] to-transparent md:hidden" />
              </div>

              <div className="relative flex items-end overflow-hidden p-5 md:min-h-0 md:p-8 lg:p-10">
                <div className="absolute right-0 top-0 h-full w-20 skew-x-[-15deg] bg-[linear-gradient(180deg,rgba(216,58,36,0.34),rgba(255,138,61,0.08),transparent)] opacity-70" />
                <div
                  key={activeItem.key}
                  className="relative z-10 animate-[jutsuCopyIn_480ms_cubic-bezier(0.22,1,0.36,1)_both]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--jutsu-red)]">
                    Técnica {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 max-w-sm text-3xl font-black leading-[1.02] md:text-5xl">
                    {activeItem.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-base font-semibold leading-7 text-white/72">
                    {activeItem.text}
                  </p>
                  <a
                    href={activeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-7"
                  >
                    {activeItem.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
