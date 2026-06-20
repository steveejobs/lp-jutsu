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
  variant: "brand" | "cinematic";
  categories?: string[];
};

const cinematicCategories = [
  "Sushis",
  "Sashimis",
  "Combinados",
  "Texturas",
  "Desejo",
];

function GalleryCard({
  item,
  index,
  compact = false,
  variant,
}: {
  item: GalleryItem;
  index: number;
  compact?: boolean;
  variant: "brand" | "cinematic";
}) {
  const shape = compact
    ? "h-[220px] w-[180px]"
    : variant === "brand"
      ? index % 4 === 0
        ? "h-[330px] w-[420px]"
        : "h-[330px] w-[300px]"
      : index % 5 === 0
        ? "h-[250px] w-[360px]"
        : index % 3 === 0
          ? "h-[250px] w-[300px]"
          : "h-[250px] w-[250px]";

  return (
    <figure
      className={`group relative shrink-0 overflow-hidden rounded-lg bg-neutral-950 shadow-[0_18px_42px_rgba(16,16,16,0.12)] ${shape}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 180px, 360px"
        quality={variant === "brand" ? 88 : 82}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.025]"
      />
      <div
        className={`pointer-events-none absolute inset-0 ${
          variant === "brand"
            ? "bg-gradient-to-t from-black/24 via-transparent to-transparent"
            : "bg-[radial-gradient(circle_at_50%_35%,transparent,rgba(0,0,0,0.24))]"
        }`}
      />
    </figure>
  );
}

function GalleryLoop({
  items,
  direction,
  indexOffset = 0,
  compact = false,
  variant,
}: {
  items: GalleryItem[];
  direction: "left" | "right";
  indexOffset?: number;
  compact?: boolean;
  variant: "brand" | "cinematic";
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
            key={`${item.src}-${direction}`}
            item={item}
            index={index + indexOffset}
            compact={compact}
            variant={variant}
          />
        ))}
      </div>
      <div className="flex gap-4" aria-hidden="true">
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${direction}-loop`}
            item={{ ...item, alt: "" }}
            index={index + indexOffset}
            compact={compact}
            variant={variant}
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
  variant,
  categories,
}: GallerySectionProps) {
  const midpoint = Math.ceil(items.length / 2);
  const firstRow = items.slice(0, midpoint);
  const secondRow = items.slice(midpoint);
  const isCinematic = variant === "cinematic";

  return (
    <section
      id={id}
      className={`overflow-hidden py-10 md:pb-16 md:pt-12 ${
        isCinematic ? "bg-neutral-950 text-white" : "bg-[#f6f1eb]"
      }`}
    >
      <div className="container-page">
        <div className="grid gap-7 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2
              className={`mt-5 max-w-2xl text-4xl font-black leading-[1.02] md:text-6xl ${
                isCinematic ? "text-white" : "text-neutral-950"
              }`}
            >
              {title}
            </h2>
          </div>
          <p
            className={`max-w-xl text-base font-semibold leading-7 md:justify-self-end md:text-lg ${
              isCinematic ? "text-white/68" : "text-neutral-600"
            }`}
          >
            {copy}
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-10">
        <div className="overflow-hidden md:hidden">
          <GalleryLoop
            items={items}
            direction="left"
            compact
            variant={variant}
          />
        </div>

        <div className="hidden space-y-4 md:block">
          <GalleryLoop items={firstRow} direction="left" variant={variant} />
          <GalleryLoop
            items={secondRow}
            direction="right"
            indexOffset={2}
            variant={variant}
          />
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
                    : isCinematic
                      ? "border-white/12 bg-white/8 text-white/72 hover:border-[var(--jutsu-red)]/50 hover:text-white"
                      : "border-black/10 bg-white/78 text-neutral-700 hover:border-[var(--jutsu-red)]/40 hover:text-neutral-950"
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
      items={cinematicGalleryImages}
      variant="cinematic"
      categories={cinematicCategories}
    />
  );
}

export const FoodGallerySection = CinematicGallerySection;
