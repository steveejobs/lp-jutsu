import Image from "next/image";
import type { ReactNode } from "react";
import { images } from "@/lib/site";

type JutsuHomeAnimationSlotProps = {
  children?: ReactNode;
  className?: string;
};

export function JutsuHomeAnimationSlot({
  children,
  className = "",
}: JutsuHomeAnimationSlotProps) {
  return (
    <div
      className={`jutsu-home-animation-slot relative min-h-[520px] overflow-hidden bg-neutral-950 md:min-h-full ${className}`}
    >
      {/* TODO: inserir aqui o código da animação customizada da home Jutsu */}
      {children ?? (
        <div className="absolute inset-0">
          <Image
            src={images.heroIntro}
            alt="Preparo de sushi no Jutsu Sushi"
            fill
            priority
            quality={96}
            sizes="100vw"
            className="jutsu-home-slot-image object-cover object-[58%_50%] brightness-[0.86] contrast-[1.12] saturate-[1.1] md:object-[60%_50%]"
          />
          <div className="absolute inset-0 bg-neutral-950/28" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_56%,rgba(255,118,45,0.16),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.82)_0%,rgba(9,9,9,0.48)_42%,rgba(9,9,9,0.1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,transparent_36%,rgba(0,0,0,0.74)_100%)]" />
          <div className="absolute bottom-[18%] right-[8%] h-px w-[46vw] max-w-[640px] rotate-[-12deg] bg-[linear-gradient(90deg,transparent,rgba(216,58,36,0.86),rgba(255,137,54,0.3),transparent)] opacity-80" />
        </div>
      )}
    </div>
  );
}
