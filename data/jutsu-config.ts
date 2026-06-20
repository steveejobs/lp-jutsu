export const JUTSU_CONFIG = {
  name: "Jutsu Sushi",
  instagramHandle: "@sushi.jutsu",
  instagramUrl: "https://www.instagram.com/sushi.jutsu/",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5563984184747",
  googleMapsUrl: "https://maps.app.goo.gl/vnF7z5Bk9FA6Bo4X6",
  googleRating: "4,3",
  googleReviews: "23",
  googleCategory: "Restaurante japonês autêntico",
  address: "Rua Dom Bosco, Setor Alaska, número 704, Araguaína - TO, 77813-650",
  openingHours: "Terça a domingo, das 18h às 23h",
  whatsappNumber: "5563984184747",
  fullSiteUrl: "https://lp-jutsu.vercel.app",
} as const;

export const jutsuWhatsappMessages = {
  pedido: "Olá, vim pelo site e quero fazer um pedido no Jutsu Sushi.",
  visita: "Olá, vim pelo site e quero saber mais sobre o Jutsu Sushi.",
  cardapio: "Olá, vim pelo site e quero ver as opções do Jutsu Sushi.",
} as const;

export function createJutsuWhatsAppLink(message: string) {
  return `https://api.whatsapp.com/send/?phone=${JUTSU_CONFIG.whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0&utm_source=ig`;
}
