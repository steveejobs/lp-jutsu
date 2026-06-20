"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { images } from "@/lib/site";

const BackgroundPaperShaders = dynamic(
  () =>
    import("@/components/ui/background-paper-shaders").then(
      (mod) => mod.BackgroundPaperShaders,
    ),
  { ssr: false },
);

export function JutsuHomeAnimation() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canRunShader, setCanRunShader] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setReducedMotion(motionQuery.matches);
      setCanRunShader(desktopQuery.matches && !motionQuery.matches);
    };

    sync();
    motionQuery.addEventListener("change", sync);
    desktopQuery.addEventListener("change", sync);

    return () => {
      motionQuery.removeEventListener("change", sync);
      desktopQuery.removeEventListener("change", sync);
    };
  }, []);

  // Substituir este conteúdo pelo código final da animação customizada Jutsu.
  return (
    <div className="jutsu-home-animation absolute inset-0 overflow-hidden bg-[#050505]">
      <div className="jutsu-home-animation__paper-shader absolute inset-0 z-0 opacity-80 mix-blend-screen">
        {canRunShader ? (
          <BackgroundPaperShaders reducedMotion={reducedMotion} />
        ) : null}
      </div>

      <Image
        src={images.heroIntro}
        alt=""
        fill
        priority
        quality={96}
        sizes="100vw"
        className="jutsu-home-animation__image z-[1] object-cover object-[62%_50%] opacity-55 mix-blend-luminosity brightness-[0.78] contrast-[1.22] saturate-[0.94] md:object-[60%_50%]"
      />

      <div className="absolute inset-0 z-[2] bg-[#050505]/18" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_66%_48%,rgba(255,116,42,0.24),transparent_31%),radial-gradient(circle_at_74%_26%,rgba(216,58,36,0.16),transparent_25%)]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(10,10,10,0.55)_42%,rgba(10,10,10,0.04)_100%)] md:bg-[linear-gradient(90deg,rgba(5,5,5,0.86)_0%,rgba(10,10,10,0.42)_40%,rgba(10,10,10,0)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,transparent_34%,rgba(0,0,0,0.72)_100%)]" />

      <div className="jutsu-home-animation__warm-glow absolute right-[4%] top-[24%] z-[3] h-[34vh] w-[42vw] rounded-full bg-[rgba(255,117,42,0.14)] blur-3xl" />
      <div className="jutsu-home-animation__cut absolute bottom-[24%] right-[-6%] z-[3] h-px w-[62vw] max-w-[760px] rotate-[-11deg] bg-[linear-gradient(90deg,transparent,rgba(216,58,36,0.08),rgba(216,58,36,0.9),rgba(255,137,54,0.42),transparent)]" />
      <div className="jutsu-home-animation__cut jutsu-home-animation__cut--thin absolute bottom-[31%] right-[8%] z-[3] h-px w-[38vw] max-w-[480px] rotate-[-11deg] bg-[linear-gradient(90deg,transparent,rgba(255,137,54,0.55),transparent)]" />

      <div className="jutsu-home-animation__logo absolute right-[8%] top-[17%] z-[4] hidden w-[144px] opacity-35 md:block lg:right-[10%] lg:w-[174px]">
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
