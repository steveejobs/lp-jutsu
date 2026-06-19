import {
  brandGalleryImages,
  cinematicGalleryImages,
  heroImage,
  locationImage,
  logoMedia,
  scrollExperienceMedia,
} from "@/data/jutsu-media";
import {
  JUTSU_CONFIG,
  createJutsuWhatsAppLink,
  jutsuWhatsappMessages,
} from "@/data/jutsu-config";

export const WHATSAPP_NUMBER = JUTSU_CONFIG.whatsappNumber;
export const FULL_SITE_URL = JUTSU_CONFIG.fullSiteUrl;
export const ADDRESS = JUTSU_CONFIG.address;
export const GOOGLE_MAPS_URL = JUTSU_CONFIG.googleMapsUrl;
export const INSTAGRAM_URL = JUTSU_CONFIG.instagramUrl;
export const OPENING_HOURS = JUTSU_CONFIG.openingHours;

export function createWhatsAppLink(message: string) {
  return createJutsuWhatsAppLink(message);
}

export const buildWhatsappLink = createWhatsAppLink;

export const whatsappMessages = {
  headerOrder: jutsuWhatsappMessages.pedido,
  heroOrder: jutsuWhatsappMessages.pedido,
  delivery: jutsuWhatsappMessages.pedido,
  pickup:
    "Ola, vim pelo site e quero fazer um pedido para retirada no Jutsu Sushi.",
  visit: jutsuWhatsappMessages.visita,
  menu: jutsuWhatsappMessages.cardapio,
  location: jutsuWhatsappMessages.visita,
  footer: jutsuWhatsappMessages.pedido,
};

export const navLinks = [
  { label: "Pedir", href: "#experiencias" },
  { label: "Galerias", href: "#jutsu-de-perto" },
  { label: "Destaques", href: "#destaques" },
  { label: "Localizacao", href: "#localizacao" },
];

export const images = {
  logo: logoMedia.src,
  heroIntro: heroImage.src,
  brandGallery: brandGalleryImages.map((item) => item.src),
  cinematicGallery: cinematicGalleryImages.map((item) => item.src),
  scrollExperienceBg: scrollExperienceMedia.background.src,
  scrollMainVideo: scrollExperienceMedia.video,
  scrollMainVideoMobile: scrollExperienceMedia.mobileVideo,
  locationFacade: locationImage.src,
};
