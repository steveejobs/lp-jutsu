export type JutsuMediaAsset = {
  src: string;
  alt: string;
};

export const logoMedia = {
  src: "/jutsu/logo-jutsu.png",
  alt: "Jutsu Sushi",
} satisfies JutsuMediaAsset;

export const faviconMedia = {
  src: "/jutsu/favicon-jutsu.png",
  alt: "Jutsu Sushi",
} satisfies JutsuMediaAsset;

export const heroImage = {
  src: "/jutsu/imagem hero.jpg",
  alt: "Preparo de sushi no Jutsu Sushi",
} satisfies JutsuMediaAsset;

export const locationImage = {
  src: "/jutsu/fachada-jutsu.png",
  alt: "Fachada do Jutsu Sushi em Araguaina",
} satisfies JutsuMediaAsset;

export const scrollExperienceMedia = {
  background: {
    src: "/jutsu/scroll-experience-bg.jpg",
    alt: "",
  },
  video: "/jutsu/scroll-main-video.mp4",
  mobileVideo: "/jutsu/scroll-main-video-mobile.mp4",
} as const;

export const brandGalleryImages = [
  {
    src: "/jutsu/brand-gallery-01.png",
    alt: "Fachada preta e vermelha do Jutsu Sushi",
  },
  {
    src: "/jutsu/brand-gallery-02.png",
    alt: "Pratos reais servidos pelo Jutsu Sushi",
  },
  {
    src: "/jutsu/brand-gallery-03.png",
    alt: "Combinado de sushi servido no Jutsu Sushi",
  },
  {
    src: "/jutsu/brand-gallery-04.png",
    alt: "Prato com camarao e molho servido no Jutsu Sushi",
  },
  {
    src: "/jutsu/brand-gallery-05.png",
    alt: "Combinado de sushi com ambiente do Jutsu ao fundo",
  },
  {
    src: "/jutsu/brand-gallery-06.png",
    alt: "Combo de delivery com sushis variados",
  },
] satisfies JutsuMediaAsset[];

export const cinematicGalleryImages = [
  { src: "/jutsu/gallery-food-10.jpg", alt: "Close-up de sushi com molho" },
  { src: "/jutsu/gallery-food-11.jpg", alt: "Sushi em detalhe" },
  {
    src: "/jutsu/gallery-food-12.jpg",
    alt: "Combinado japones em composicao escura",
  },
  {
    src: "/jutsu/gallery-food-13.jpg",
    alt: "Pecas de sushi com brilho e textura",
  },
  { src: "/jutsu/gallery-food-14.jpg", alt: "Selecao de sushi em close-up" },
  { src: "/jutsu/gallery-food-15.jpg", alt: "Detalhe de sushi com contraste" },
  { src: "/jutsu/gallery-food-16.jpg", alt: "Peca japonesa finalizada" },
  { src: "/jutsu/gallery-food-17.jpg", alt: "Sushi com textura e molho" },
  {
    src: "/jutsu/gallery-food-18.jpg",
    alt: "Prato japones em fotografia cinematografica",
  },
  {
    src: "/jutsu/gallery-food-19.jpg",
    alt: "Comida japonesa em composicao premium",
  },
] satisfies JutsuMediaAsset[];

export const instagramGalleryImages = [
  brandGalleryImages[1],
  brandGalleryImages[3],
  cinematicGalleryImages[0],
  cinematicGalleryImages[3],
] satisfies JutsuMediaAsset[];

export const mediaBySection = {
  hero: [heroImage],
  brandGallery: brandGalleryImages,
  cinematicGallery: cinematicGalleryImages,
  location: [locationImage],
  instagram: instagramGalleryImages,
} as const;
