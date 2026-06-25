"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { JutsuMediaAsset } from "@/data/jutsu-media";

type GalleryItem = JutsuMediaAsset;

function useIsDesktopGallery() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}

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
      role={decorative ? "presentation" : undefined}
      className={`group relative shrink-0 overflow-hidden rounded-lg bg-neutral-950 shadow-[0_18px_42px_rgba(0,0,0,0.24)] ${shape}`}
    >
      <Image
        src={item.src}
        alt={decorative ? "" : item.alt}
        aria-hidden={decorative ? "true" : undefined}
        role={decorative ? "presentation" : undefined}
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
            key={`${item.src}-${direction}-real-${index}`}
            item={item}
            index={index + indexOffset}
            compact={compact}
          />
        ))}
      </div>
      <div className="flex gap-4" aria-hidden="true" role="presentation">
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${direction}-loop-${index}`}
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

export function FoodGalleryMarquee({ items }: { items: GalleryItem[] }) {
  const isDesktop = useIsDesktopGallery();
  const galleryImages = Array.from(
    new Map(items.map((item) => [item.src, item])).values(),
  )
    .filter((item) => {
      const alt = item.alt.trim().toLowerCase();
      return alt.length > 0 && alt !== "image";
    })
    .slice(0, 10);
  const midpoint = Math.ceil(galleryImages.length / 2);
  const rowOne = galleryImages.slice(0, midpoint);
  const rowTwo = galleryImages.slice(midpoint);

  if (isDesktop) {
    return (
      <div className="space-y-4 overflow-hidden">
        <GalleryLoop items={rowOne} direction="left" />
        {rowTwo.length > 0 ? (
          <GalleryLoop items={rowTwo} direction="right" indexOffset={2} />
        ) : null}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <GalleryLoop items={galleryImages} direction="left" compact />
    </div>
  );
}
