"use client";

import Image from "next/image";
import { images } from "@/lib/site";

export function JutsuHomeAnimation() {
  // Substituir este conteúdo pelo código final da animação customizada Jutsu.
  return (
    <div className="jutsu-home-animation pointer-events-none absolute inset-0 h-full w-full overflow-hidden bg-[#050505]">
      <Image
        src={images.heroIntro}
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="jutsu-home-animation__image-bg z-[1] h-full w-full object-cover object-[50%_50%] md:object-[52%_50%]"
      />

      <div className="jutsu-home-animation__grade absolute inset-0 z-[2]" />
      <div className="jutsu-home-animation__glow jutsu-home-animation__glow--large absolute z-[3]" />
      <div className="jutsu-home-animation__glow jutsu-home-animation__glow--focus absolute z-[4]" />
      <div className="jutsu-home-animation__cut jutsu-home-animation__cut--primary absolute z-[5]" />
      <div className="jutsu-home-animation__cut jutsu-home-animation__cut--secondary absolute z-[5]" />
      <div className="jutsu-home-animation__grain absolute inset-0 z-[6]" />

      <div className="jutsu-home-animation__logo absolute right-[8%] top-[17%] z-[7] hidden w-[144px] opacity-35 md:block lg:right-[10%] lg:w-[174px]">
        <Image
          src={images.logo}
          alt=""
          width={220}
          height={86}
          priority
          className="h-auto w-full drop-shadow-[0_22px_54px_rgba(0,0,0,0.72)]"
        />
      </div>
    </div>
  );
}
