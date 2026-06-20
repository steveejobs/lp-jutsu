"use client";

import Image from "next/image";
import {
  cinematicGalleryImages,
  type JutsuMediaAsset,
} from "@/data/jutsu-media";

type GalleryItem = JutsuMediaAsset;

type GallerySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  items: GalleryItem[];
  categories?: string[];
};

const cinematicCategories = [
  "Sushis",
  "Sashimis",
  "Combinados",
  "Texturas",
  "Desejo",
];

const cinematicGalleryItems = Array.from(
  new Map(cinematicGalleryImages.map((item) => [item.src, item])).values(),
).slice(0, 12);

function GalleryCard({
  item,
  index,
  compact = false,
  decorative = false,
}: {
  item: GalleryItem;
  index: number;
  compact?: boolean;
  decorative?: boolean;
}) {
  const shape = compact
    ? "h-[238px] w-[190px]"
    : index % 5 === 0
      ? "h-[270px] w-[390px]"
      : index % 3 === 0
        ? "h-[270px] w-[320px]"
        : "h-[270px] w-[270px]";

  return (
    <figure
      aria-hidden={decorative ? "true" : undefined}
      className={`group relative shrink-0 overflow-hidden rounded-lg bg-neutral-950 shadow-[0_18px_42px_rgba(0,0,0,0.24)] ${shape}`}
    >
      <Image
        src={item.src}
        alt={decorative ? "" : item.alt}
        fill
        sizes="(max-width: 768px) 190px, 390px"
        quality={86}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent,rgba(0,0,0,0.22))]" />
    </figure>
  );
}

function GalleryLoop({
  items,
  direction,
  indexOffset = 0,
  compact = false,
}: {
  items: GalleryItem[];
  direction: "left" | "right";
  indexOffset?: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`gallery-marquee ${
        compact ? "gallery-marquee-mobile" : "gallery-marquee-desktop"
      } ${
        direction === "left" ? "gallery-marquee-left" : "gallery-marquee-right"
      } flex w-max gap-4`}
    >
      <div className="flex gap-4">
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${direction}-real`}
            item={item}
            index={index + indexOffset}
            compact={compact}
          />
        ))}
      </div>
      <div className="flex gap-4" aria-hidden="true">
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${direction}-loop`}
            item={item}
            index={index + indexOffset}
            compact={compact}
            decorative
          />
        ))}
      </div>
    </div>
  );
}

function GallerySection({
  id,
  eyebrow,
  title,
  copy,
  items,
  categories,
}: GallerySectionProps) {
  const uniqueImages = Array.from(
    new Map(items.map((item) => [item.src, item])).values(),
  ).slice(0, 12);
  const midpoint = Math.ceil(uniqueImages.length / 2);
  const rowOne = uniqueImages.slice(0, midpoint);
  const rowTwo = uniqueImages.slice(midpoint);
  const mobileRow = uniqueImages;

  return (
    <section
      id={id}
      className="overflow-hidden bg-neutral-950 py-10 text-white md:pb-16 md:pt-12"
    >
      <div className="container-page">
        <div className="grid gap-7 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2
              className={`mt-5 max-w-2xl text-4xl font-black leading-[1.02] md:text-6xl ${"text-white"}`}
            >
              {title}
            </h2>
          </div>
          <p
            className={`max-w-xl text-base font-semibold leading-7 md:justify-self-end md:text-lg ${"text-white/68"}`}
          >
            {copy}
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-10">
        <div className="overflow-hidden md:hidden">
          <GalleryLoop items={mobileRow} direction="left" compact />
        </div>

        <div className="hidden space-y-4 md:block">
          <GalleryLoop items={rowOne} direction="left" />
          {rowTwo.length > 0 ? (
            <GalleryLoop items={rowTwo} direction="right" indexOffset={2} />
          ) : null}
        </div>
      </div>

      {categories ? (
        <div className="container-page">
          <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wide transition ${
                  index === 0
                    ? "border-[var(--jutsu-red)] bg-white text-[var(--jutsu-red)] shadow-[0_10px_24px_rgba(216,58,36,0.08)]"
                    : "border-white/12 bg-white/8 text-white/72 hover:border-[var(--jutsu-red)]/50 hover:text-white"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function CinematicGallerySection() {
  return (
    <GallerySection
      id="galeria-cinematografica"
      eyebrow="Galeria cinematográfica"
      title="Cortes, texturas e desejo."
      copy="Close-ups, brilho e textura para abrir o apetite antes do pedido."
      items={cinematicGalleryItems}
      categories={cinematicCategories}
    />
  );
}

export const FoodGallerySection = CinematicGallerySection;
