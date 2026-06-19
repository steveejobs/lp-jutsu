import Image from "next/image";
import {
  BrandGallerySection,
  CinematicGallerySection,
} from "@/components/FoodGallerySection";
import { Header } from "@/components/Header";
import { HeroInteractiveIntro } from "@/components/HeroInteractiveIntro";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { JUTSU_CONFIG } from "@/data/jutsu-config";
import { locationImage } from "@/data/jutsu-media";
import {
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  buildWhatsappLink,
  images,
  navLinks,
  whatsappMessages,
} from "@/lib/site";

const orderOptions = [
  {
    title: "Delivery",
    text: "Peca pelo WhatsApp com praticidade e receba sua experiencia Jutsu.",
    cta: "Pedir agora",
    href: buildWhatsappLink(whatsappMessages.delivery),
  },
  {
    title: "Retirada",
    text: "Faca seu pedido e retire no local.",
    cta: "Pedir para retirada",
    href: buildWhatsappLink(whatsappMessages.pickup),
  },
  {
    title: "Visitar o Jutsu",
    text: "Conheca o espaco e aproveite a culinaria japonesa a noite.",
    cta: "Ver localizacao",
    href: GOOGLE_MAPS_URL,
  },
];

const highlights = [
  {
    title: "Culinaria japonesa autentica",
    text: "Sushis, sashimis e combinados com identidade japonesa e preparo direto.",
  },
  {
    title: "Excelente custo-beneficio",
    text: "Uma proposta acessivel para pedir bem sem perder apresentacao.",
  },
  {
    title: "Atendimento a noite",
    text: "Aberto de terca a domingo, das 18:00 as 23:00.",
  },
  {
    title: "Pedido rapido pelo WhatsApp",
    text: "Cardapio, pedido e combinacao de retirada ou entrega em poucos toques.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-[#fffdf9]">
        <HeroInteractiveIntro />

        <section className="border-b border-black/10 bg-neutral-950 py-6 text-white">
          <Reveal
            threshold={0.35}
            className="container-page grid gap-4 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <p className="text-lg font-black text-white">
                <span className="text-[var(--jutsu-red)]">★★★★★</span>{" "}
                {JUTSU_CONFIG.googleRating} no Google ·{" "}
                {JUTSU_CONFIG.googleReviews} avaliacoes
              </p>
              <p className="mt-1 text-sm font-bold text-white/68">
                {JUTSU_CONFIG.googleCategory} · Araguaina - TO
              </p>
            </div>
            <p className="max-w-md text-sm font-black uppercase tracking-[0.08em] text-white/78">
              Culinaria japonesa com excelente custo-beneficio.
            </p>
          </Reveal>
        </section>

        <section id="experiencias" className="section-pad bg-[#fffdf9]">
          <div className="container-page">
            <Reveal threshold={0.45}>
              <SectionIntro
                eyebrow="Pedido"
                title="Peca do seu jeito."
                copy="Delivery, retirada ou visita: tres caminhos diretos para aproveitar o Jutsu Sushi a noite."
              />
            </Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {orderOptions.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  threshold={0.22}
                  className="h-full"
                >
                  <article className="fine-border group h-full rounded-lg bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-8 h-px w-16 bg-[var(--jutsu-red)] transition-all duration-500 group-hover:w-24" />
                    <h3 className="text-2xl font-black text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 min-h-14 text-base leading-7 text-neutral-600">
                      {item.text}
                    </p>
                    <a
                      href={item.href}
                      className="btn btn-dark mt-6 w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.cta}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BrandGallerySection />
        <CinematicGallerySection />

        <section id="destaques" className="section-pad bg-white">
          <div className="container-page">
            <Reveal threshold={0.45}>
              <SectionIntro
                eyebrow="Diferenciais"
                title="Por que escolher o Jutsu."
                copy="Uma marca jovem, direta e feita para quem quer japones autentico com desejo, entrega e preco justo."
              />
            </Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-4">
              {highlights.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  threshold={0.2}
                  className="h-full"
                >
                  <article className="h-full rounded-lg border border-black/10 bg-[#fffdf9] p-5">
                    <span className="block h-2 w-10 rounded-full bg-[var(--jutsu-red)]" />
                    <h3 className="mt-6 text-xl font-black leading-tight text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-neutral-950 text-white">
          <div className="container-page">
            <Reveal threshold={0.42} className="max-w-3xl">
              <p className="text-sm font-black text-[var(--jutsu-red)]">
                ★★★★★ {JUTSU_CONFIG.googleRating} no Google ·{" "}
                {JUTSU_CONFIG.googleReviews} avaliacoes
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">
                Quem pede, volta.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-white/68 md:text-lg">
                Clientes destacam sabor, praticidade e uma proposta japonesa com
                otimo custo-beneficio.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="localizacao" className="section-pad bg-[#fffdf9]">
          <Reveal
            threshold={0.42}
            className="container-page grid gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-center"
          >
            <div>
              <SectionIntro
                eyebrow="Localizacao"
                title="Estamos em Araguaina."
                copy="Venha nos visitar ou peca direto pelo WhatsApp."
              />
              <div className="mt-7 space-y-4 text-base leading-7 text-neutral-700">
                <p>
                  <strong className="text-neutral-950">Endereco:</strong>{" "}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[var(--jutsu-red)]"
                  >
                    {JUTSU_CONFIG.address}
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-950">Horario:</strong>{" "}
                  {JUTSU_CONFIG.openingHours}
                </p>
                <p>
                  <strong className="text-neutral-950">Instagram:</strong>{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[var(--jutsu-red)]"
                  >
                    {JUTSU_CONFIG.instagramHandle}
                  </a>
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={GOOGLE_MAPS_URL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir rota
                </a>
                <a
                  href={buildWhatsappLink(whatsappMessages.location)}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg border border-black/10 bg-neutral-900 shadow-[0_22px_60px_rgba(16,16,16,0.12)] md:h-auto md:min-h-[500px]">
              <Image
                src={locationImage.src}
                alt={locationImage.alt}
                fill
                sizes="(max-width: 768px) 92vw, 52vw"
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/94 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-black text-neutral-950">
                  Jutsu Sushi
                </p>
                <p className="mt-1 text-xs font-bold text-neutral-600">
                  Fachada preta, faixa vermelha e entrada facil de reconhecer.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white py-8">
        <Reveal
          threshold={0.35}
          className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt=""
              width={132}
              height={58}
              className="h-auto w-[112px] object-contain"
            />
            <p className="text-sm font-black text-neutral-950">
              Jutsu Sushi · Araguaina - TO
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--jutsu-red)]"
              >
                {link.label}
              </a>
            ))}
            <SocialIconLinks />
            <a
              href={buildWhatsappLink(whatsappMessages.footer)}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--jutsu-red)]"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </footer>
    </>
  );
}
