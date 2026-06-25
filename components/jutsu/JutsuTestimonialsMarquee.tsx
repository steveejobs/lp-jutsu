"use client";

import { useEffect, useRef, useState } from "react";
import {
  jutsuTestimonials,
  type JutsuTestimonial,
} from "@/src/data/jutsu-testimonials";

function formatRating(rating: JutsuTestimonial["rating"]) {
  return rating === 4.5 ? "4,5" : "5";
}

function Stars({ rating }: { rating: JutsuTestimonial["rating"] }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Avaliação ${formatRating(rating)} de 5`}
      style={{ color: "#f59e0b" }}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const isFull = index + 1 <= Math.floor(rating);
        const isHalf = rating === 4.5 && index === 4;

        if (isFull) {
          return (
            <span
              key={index}
              aria-hidden="true"
              className="text-sm leading-none"
            >
              {"\u2605"}
            </span>
          );
        }

        if (isHalf) {
          return (
            <span
              key={index}
              aria-hidden="true"
              className="relative inline-block text-sm leading-none text-white/18"
            >
              {"\u2605"}
              <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden text-[#f59e0b]">
                {"\u2605"}
              </span>
            </span>
          );
        }

        return (
          <span
            key={index}
            aria-hidden="true"
            className="text-sm leading-none text-white/18"
          >
            {"\u2605"}
          </span>
        );
      })}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: JutsuTestimonial }) {
  return (
    <article className="flex min-h-[150px] w-[264px] shrink-0 flex-col rounded-lg border border-white/10 bg-white/[0.075] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.2)] backdrop-blur sm:w-[300px] md:min-h-[156px] md:w-[326px] md:p-5">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={testimonial.rating} />
        <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-black text-white/76">
          {formatRating(testimonial.rating)}
        </span>
      </div>
      <p className="mt-3 whitespace-normal hyphens-none text-sm font-bold leading-6 text-white/82 [overflow-wrap:normal] [word-break:normal] md:text-[0.95rem]">
        {testimonial.quote}
      </p>
      <div className="mt-auto flex min-w-0 items-center justify-between gap-3 pt-4 text-xs font-black text-white">
        <span className="min-w-0 whitespace-normal hyphens-none [overflow-wrap:normal] [word-break:normal]">
          {testimonial.name}
        </span>
        <span className="shrink-0 rounded-full bg-[var(--jutsu-red)]/18 px-2.5 py-1 text-[var(--jutsu-red)]">
          {testimonial.context}
        </span>
      </div>
    </article>
  );
}

function TestimonialRow({
  testimonials,
  direction,
  playState,
  duration,
}: {
  testimonials: JutsuTestimonial[];
  direction: "left" | "right";
  playState: "running" | "paused";
  duration: string;
}) {
  if (testimonials.length === 0) return null;

  return (
    <div
      className={`ig-marquee ${
        direction === "left" ? "ig-testimonials-left" : "ig-testimonials-right"
      } flex w-max gap-3 md:gap-4`}
      style={{ animationPlayState: playState, animationDuration: duration }}
    >
      <div className="flex gap-3 md:gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.quote}-${index}-${direction}`}
            testimonial={testimonial}
          />
        ))}
      </div>
      <div
        className="flex gap-3 md:gap-4"
        aria-hidden="true"
        role="presentation"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.quote}-${index}-${direction}-loop`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

function splitRows(testimonials: JutsuTestimonial[], rows: number) {
  const rowSize = Math.ceil(testimonials.length / rows);
  return Array.from({ length: rows }, (_, index) =>
    testimonials.slice(index * rowSize, (index + 1) * rowSize),
  );
}

function StaticTestimonialsGrid({
  testimonials,
}: {
  testimonials: JutsuTestimonial[];
}) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`${testimonial.quote}-${index}-static`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}

export function JutsuTestimonialsMarquee() {
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
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(section);
    reducedQuery.addEventListener("change", syncReducedMotion);
    syncReducedMotion();

    return () => {
      observer.disconnect();
      reducedQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  const testimonials = jutsuTestimonials.slice(0, 18);
  const desktopRows = splitRows(testimonials, 3);
  const mobileRows = splitRows(testimonials, 2);
  const playState = isVisible && !reducedMotion ? "running" : "paused";

  return (
    <section
      ref={sectionRef}
      className="section-pad overflow-hidden bg-neutral-950 text-white"
      aria-labelledby="jutsu-testimonials-title"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-black text-[var(--jutsu-red)]">
            ★★★★★ 4,3 no Google · 23 avaliações
          </p>
          <h2
            id="jutsu-testimonials-title"
            className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl"
          >
            Quem pede, volta.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-white/68 md:text-lg">
            Comentários sobre sabor, praticidade e custo-benefício.
          </p>
        </div>
      </div>

      {reducedMotion ? (
        <div className="container-page">
          <StaticTestimonialsGrid testimonials={testimonials} />
        </div>
      ) : (
        <div className="mt-8 space-y-3 md:mt-10 md:space-y-4">
          <div className="grid gap-3 md:hidden">
            <TestimonialRow
              testimonials={mobileRows[0]}
              direction="left"
              playState={playState}
              duration="46s"
            />
            <TestimonialRow
              testimonials={mobileRows[1]}
              direction="right"
              playState={playState}
              duration="52s"
            />
          </div>
          <div className="hidden gap-4 md:grid">
            <TestimonialRow
              testimonials={desktopRows[0]}
              direction="left"
              playState={playState}
              duration="58s"
            />
            <TestimonialRow
              testimonials={desktopRows[1]}
              direction="right"
              playState={playState}
              duration="66s"
            />
            <TestimonialRow
              testimonials={desktopRows[2]}
              direction="left"
              playState={playState}
              duration="62s"
            />
          </div>
        </div>
      )}
    </section>
  );
}
