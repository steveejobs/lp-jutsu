import Image from "next/image";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  buildWhatsappLink,
  images,
  navLinks,
  whatsappMessages,
} from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-neutral-950/58 shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="container-page flex h-[78px] items-center justify-between gap-3 md:h-[90px] md:gap-6">
        <a
          href="#topo"
          className="relative flex min-w-[150px] shrink-0 items-center gap-3 overflow-visible py-2 sm:min-w-[168px] md:min-w-[208px]"
          aria-label="Jutsu Sushi"
        >
          <Image
            src={images.logo}
            alt="Jutsu Sushi"
            width={190}
            height={64}
            priority
            className="h-auto max-h-[58px] w-[158px] max-w-[46vw] object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:w-[176px] md:max-h-[70px] md:w-[208px] lg:w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-extrabold text-white/78 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SocialIconLinks className="hidden xl:flex" variant="dark" />

        <a
          href={buildWhatsappLink(whatsappMessages.headerOrder)}
          className="btn btn-primary hidden md:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          Pedir agora
        </a>

        <div className="flex min-w-0 shrink-0 items-center gap-2 md:hidden">
          <a
            href={buildWhatsappLink(whatsappMessages.headerOrder)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:text-[#37d970]"
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com o Jutsu Sushi pelo WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={buildWhatsappLink(whatsappMessages.headerOrder)}
            className="btn btn-primary min-h-10 w-auto px-4 text-xs"
            target="_blank"
            rel="noreferrer"
          >
            Pedir
          </a>
        </div>
      </div>
    </header>
  );
}
