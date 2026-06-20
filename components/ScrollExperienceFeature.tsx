"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { scrollExperienceMedia } from "@/data/jutsu-media";

export function ScrollExperienceFeature() {
  return (
    <ScrollExpandMedia
      mediaSrc={scrollExperienceMedia.video}
      mobileMediaSrc={scrollExperienceMedia.mobileVideo}
      posterSrc={scrollExperienceMedia.background.src}
      mobilePosterSrc={scrollExperienceMedia.background.src}
      bgImageSrc={scrollExperienceMedia.background.src}
      title="Do pedido ao primeiro prato."
      date="JUTSU À NOITE"
      scrollToExpand="Uma experiência japonesa direta, urbana e feita para pedir."
    />
  );
}
