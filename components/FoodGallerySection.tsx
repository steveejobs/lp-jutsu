import {
  cinematicGalleryImages,
  type JutsuMediaAsset,
} from "@/data/jutsu-media";
import { FoodGalleryMarquee } from "@/components/FoodGalleryMarqueeClient";

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

const cinematicImages = cinematicGalleryImages;

const uniqueImages = Array.from(
  new Map(cinematicImages.map((img) => [img.src, img])).values(),
).slice(0, 10);

function GallerySection({
  id,
  eyebrow,
  title,
  copy,
  items,
  categories,
}: GallerySectionProps) {
  const galleryImages = Array.from(
    new Map(items.map((item) => [item.src, item])).values(),
  ).slice(0, 10);

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
        <FoodGalleryMarquee items={galleryImages} />
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
      items={uniqueImages}
      categories={cinematicCategories}
    />
  );
}

export const FoodGallerySection = CinematicGallerySection;
