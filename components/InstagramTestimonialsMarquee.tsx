"use client";

import { useEffect, useRef, useState } from "react";
import type { JutsuReview } from "@/data/jutsu-reviews";

type InstagramTestimonialsMarqueeProps = {
  reviews: JutsuReview[];
  showHeader?: boolean;
  theme?: "light" | "dark";
};

function ReviewCard({ review }: { review: JutsuReview }) {
  const ratingLabel = review.rating === 4.5 ? "4,5 estrelas" : "5 estrelas";

  return (
    <article className="min-h-[136px] w-[280px] shrink-0 rounded-lg border border-black/10 bg-white p-4 shadow-[0_10px_24px_rgba(16,16,16,0.055)] sm:w-[300px]">
      <div className="flex items-center justify-between gap-3">
        <div
          className="flex items-center gap-0.5 text-[var(--jutsu-red)]"
          aria-label={ratingLabel}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={`text-sm leading-none ${
                review.rating === 4.5 && index === 4 ? "opacity-45" : ""
              }`}
            >
              {"\u2605"}
            </span>
          ))}
        </div>
        <span className="shrink-0 rounded-full bg-[#fff1ed] px-2.5 py-1 text-xs font-black text-[var(--jutsu-red)]">
          {ratingLabel}
        </span>
      </div>
      <p className="mt-3 whitespace-normal hyphens-none text-sm font-bold leading-6 text-neutral-700 [overflow-wrap:normal] [word-break:normal]">
        {review.text}
      </p>
      <div className="mt-3 flex min-w-0 items-center justify-between gap-3 text-xs font-black text-neutral-950">
        <span className="min-w-0 whitespace-normal hyphens-none [overflow-wrap:normal] [word-break:normal]">
          {review.name}
        </span>
        <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-600">
          {review.source}
        </span>
      </div>
    </article>
  );
}

function ReviewRow({
  reviews,
  direction,
  playState,
  className = "",
  duration,
}: {
  reviews: JutsuReview[];
  direction: "left" | "right";
  playState: "running" | "paused";
  className?: string;
  duration: string;
}) {
  if (reviews.length === 0) return null;

  return (
    <div
      className={`ig-marquee ${
        direction === "left" ? "ig-testimonials-left" : "ig-testimonials-right"
      } flex w-max gap-3 ${className}`}
      style={{ animationPlayState: playState, animationDuration: duration }}
    >
      <div className="flex gap-3">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.text}-${index}-${direction}`}
            review={review}
          />
        ))}
      </div>
      <div className="flex gap-3" aria-hidden="true">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.text}-${index}-${direction}-loop`}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}

function splitRows(reviews: JutsuReview[], rows: number) {
  const rowSize = Math.ceil(reviews.length / rows);
  return Array.from({ length: rows }, (_, index) =>
    reviews.slice(index * rowSize, (index + 1) * rowSize),
  );
}

export function InstagramTestimonialsMarquee({
  reviews,
  showHeader = true,
  theme = "light",
}: InstagramTestimonialsMarqueeProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setReducedMotion(reducedQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(section);
    reducedQuery.addEventListener("change", syncReducedMotion);
    syncReducedMotion();

    return () => {
      observer.disconnect();
      reducedQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  const visibleReviews = reviews.slice(0, 18);
  const desktopRows = splitRows(visibleReviews, 3);
  const mobileRows = splitRows(visibleReviews, 2);
  const playState = isVisible && !reducedMotion ? "running" : "paused";
  const headingClass = theme === "dark" ? "text-white" : "text-neutral-950";
  const copyClass = theme === "dark" ? "text-white/68" : "text-neutral-600";

  return (
    <section ref={sectionRef} className="ig-rise mt-6 overflow-hidden">
      {showHeader ? (
        <div className="px-1">
          <h2 className={`text-2xl font-black leading-tight ${headingClass}`}>
            Quem pede, volta.
          </h2>
          <p className={`mt-1 text-sm font-bold leading-6 ${copyClass}`}>
            Depoimentos curtos para mostrar a proposta do Jutsu.
          </p>
        </div>
      ) : null}
      <div className="mt-4 grid gap-3 md:hidden">
        <ReviewRow
          reviews={mobileRows[0]}
          direction="left"
          playState={playState}
          duration="38s"
        />
        <ReviewRow
          reviews={mobileRows[1]}
          direction="right"
          playState={playState}
          duration="42s"
        />
      </div>
      <div className="mt-6 hidden gap-3 md:grid">
        <ReviewRow
          reviews={desktopRows[0]}
          direction="left"
          playState={playState}
          duration="42s"
        />
        <ReviewRow
          reviews={desktopRows[1]}
          direction="right"
          playState={playState}
          duration="48s"
        />
        <ReviewRow
          reviews={desktopRows[2]}
          direction="left"
          playState={playState}
          duration="46s"
        />
      </div>
    </section>
  );
}
