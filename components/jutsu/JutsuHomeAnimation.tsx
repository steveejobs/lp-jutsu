"use client";

import Image from "next/image";
import { DotOrbit, MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";
import { images } from "@/lib/site";

export function JutsuHomeAnimation() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  // Substituir este conteúdo pelo código final da animação customizada Jutsu.
  return (
    <div className="jutsu-home-animation absolute inset-0 overflow-hidden bg-[#050505]">
      <Image
        src={images.heroIntro}
        alt=""
        fill
        priority
        quality={96}
        sizes="100vw"
        className="jutsu-home-animation__image object-cover object-[62%_50%] brightness-[0.72] contrast-[1.18] saturate-[1.04] md:object-[60%_50%]"
      />

      <MeshGradient
        className="jutsu-home-animation__shader absolute inset-0 h-full w-full opacity-[0.62] mix-blend-screen"
        colors={["#030303", "#171717", "#30201b", "#d83a24", "#ff8936"]}
        speed={reducedMotion ? 0 : 0.18}
        distortion={0.42}
        swirl={0.18}
        grainMixer={0.35}
        grainOverlay={0.08}
        maxPixelCount={900000}
      />

      <div className="jutsu-home-animation__dots absolute inset-0 hidden opacity-[0.18] mix-blend-screen md:block">
        <DotOrbit
          className="h-full w-full"
          colorBack="#05050500"
          colors={["#2a2a2a66", "#d83a2438", "#ff893624"]}
          speed={reducedMotion ? 0 : 0.12}
          size={0.12}
          sizeRange={0.2}
          spreading={0.12}
          scale={1.45}
          maxPixelCount={420000}
        />
      </div>

      <div className="absolute inset-0 bg-[#050505]/34" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_50%,rgba(255,116,42,0.18),transparent_30%),radial-gradient(circle_at_74%_26%,rgba(216,58,36,0.12),transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(10,10,10,0.68)_42%,rgba(10,10,10,0.2)_100%)] md:bg-[linear-gradient(90deg,rgba(5,5,5,0.9)_0%,rgba(10,10,10,0.54)_40%,rgba(10,10,10,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.46)_0%,transparent_34%,rgba(0,0,0,0.78)_100%)]" />

      <div className="jutsu-home-animation__warm-glow absolute right-[4%] top-[24%] h-[34vh] w-[42vw] rounded-full bg-[rgba(255,117,42,0.12)] blur-3xl" />
      <div className="jutsu-home-animation__cut absolute bottom-[24%] right-[-6%] h-px w-[62vw] max-w-[760px] rotate-[-11deg] bg-[linear-gradient(90deg,transparent,rgba(216,58,36,0.08),rgba(216,58,36,0.9),rgba(255,137,54,0.42),transparent)]" />
      <div className="jutsu-home-animation__cut jutsu-home-animation__cut--thin absolute bottom-[31%] right-[8%] h-px w-[38vw] max-w-[480px] rotate-[-11deg] bg-[linear-gradient(90deg,transparent,rgba(255,137,54,0.55),transparent)]" />

      <div className="jutsu-home-animation__logo absolute right-[8%] top-[17%] hidden w-[144px] opacity-35 md:block lg:right-[10%] lg:w-[174px]">
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
