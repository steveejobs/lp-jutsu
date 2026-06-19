export const JUTSU_CONFIG = {
  name: "Jutsu Sushi",
  instagramHandle: "@sushi.jutsu",
  instagramUrl: "https://www.instagram.com/sushi.jutsu/",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=5563984184747&text&type=phone_number&app_absent=0&utm_source=ig",
  googleMapsUrl: "https://maps.app.goo.gl/vnF7z5Bk9FA6Bo4X6",
  googleRating: "4,3",
  googleReviews: "23",
  googleCategory: "Restaurante japones autentico",
  address: "Rua Dom Bosco, Setor Alaska, numero 704, Araguaina - TO, 77813-650",
  openingHours: "Terca a domingo, das 18:00 as 23:00",
  whatsappNumber: "5563984184747",
  fullSiteUrl: "https://lp-jutsu.vercel.app",
} as const;

export const jutsuWhatsappMessages = {
  pedido: "Ola, vim pelo site e quero fazer um pedido no Jutsu Sushi.",
  visita: "Ola, vim pelo site e quero saber mais sobre o Jutsu Sushi.",
  cardapio: "Ola, vim pelo site e quero ver as opcoes do Jutsu Sushi.",
} as const;

export function createJutsuWhatsAppLink(message: string) {
  return `https://api.whatsapp.com/send/?phone=${JUTSU_CONFIG.whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0&utm_source=ig`;
}
