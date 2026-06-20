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
  alt: "Fachada do Jutsu Sushi em Araguaína",
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

export const jutsuExperienceItems = [
  {
    key: "delivery",
    label: "Delivery",
    title: "Delivery sem enrolar.",
    text: "Peça pelo WhatsApp e receba seus favoritos com praticidade.",
    cta: "Pedir pelo WhatsApp",
    action: "whatsapp",
    message:
      "Olá, vim pelo site e quero fazer um pedido por delivery no Jutsu Sushi.",
    image: brandGalleryImages[5],
  },
  {
    key: "combinados",
    label: "Combinados",
    title: "Combinados para dividir.",
    text: "Sushi bem montado para pedir sozinho, em casal ou com a galera.",
    cta: "Ver opções pelo WhatsApp",
    action: "whatsapp",
    message:
      "Olá, vim pelo site e quero ver as opções de combinados do Jutsu Sushi.",
    image: brandGalleryImages[2],
  },
  {
    key: "hot",
    label: "Hot e especiais",
    title: "Quente, crocante e direto.",
    text: "Peças para quem quer sabor forte e aquele pedido sem erro.",
    cta: "Pedir agora",
    action: "whatsapp",
    message:
      "Olá, vim pelo site e quero pedir hot e peças especiais no Jutsu Sushi.",
    image: brandGalleryImages[3],
  },
  {
    key: "classicos",
    label: "Sashimis e clássicos",
    title: "Clássicos japoneses.",
    text: "Cortes, textura e preparo para quem gosta do essencial bem feito.",
    cta: "Chamar no WhatsApp",
    action: "whatsapp",
    message:
      "Olá, vim pelo site e quero pedir sashimis e clássicos japoneses no Jutsu Sushi.",
    image: brandGalleryImages[4],
  },
  {
    key: "visita",
    label: "Visitar o Jutsu",
    title: "Passe no Jutsu.",
    text: "Estamos em Araguaína, de terça a domingo, das 18h às 23h.",
    cta: "Ver localização",
    action: "location",
    message: "Olá, vim pelo site e quero ver a localização do Jutsu Sushi.",
    image: brandGalleryImages[0],
  },
] satisfies Array<{
  key: string;
  label: string;
  title: string;
  text: string;
  cta: string;
  action: "whatsapp" | "location";
  message: string;
  image: JutsuMediaAsset;
}>;

export const cinematicGalleryImages = [
  { src: "/jutsu/gallery-food-10.jpg", alt: "Close-up de sushi com molho" },
  { src: "/jutsu/gallery-food-11.jpg", alt: "Sushi em detalhe" },
  {
    src: "/jutsu/gallery-food-12.jpg",
    alt: "Combinado japonês em composição escura",
  },
  {
    src: "/jutsu/gallery-food-13.jpg",
    alt: "Peças de sushi com brilho e textura",
  },
  { src: "/jutsu/gallery-food-14.jpg", alt: "Seleção de sushi em close-up" },
  { src: "/jutsu/gallery-food-15.jpg", alt: "Detalhe de sushi com contraste" },
  { src: "/jutsu/gallery-food-16.jpg", alt: "Peça japonesa finalizada" },
  { src: "/jutsu/gallery-food-17.jpg", alt: "Sushi com textura e molho" },
  {
    src: "/jutsu/gallery-food-18.jpg",
    alt: "Prato japonês em fotografia cinematográfica",
  },
  {
    src: "/jutsu/gallery-food-19.jpg",
    alt: "Comida japonesa em composição premium",
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
  jutsuExperience: jutsuExperienceItems.map((item) => item.image),
  cinematicGallery: cinematicGalleryImages,
  location: [locationImage],
  instagram: instagramGalleryImages,
} as const;
