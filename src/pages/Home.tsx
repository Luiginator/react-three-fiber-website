import React from "react";
import PageTemplate from "../PageTemplate";
import HeroSlider from "src/blocks/HeroSlider";
import Benefits, { TBenefit } from "src/blocks/Benefits";

import PuzzleSVG from "@icons/puzzle";
import PerformanceSVG from "@icons/performance";
import ReactSVG from "@icons/react";
import CrossPlatformSVG from "@icons/cross_platform";

export default function Home() {
  return (
    <PageTemplate>
      <HeroSlider
        headline="React three fiber"
        subheadline="is a react renderer for three.js"
      />
      <Benefits
        headline="Build Threejs applications declaratively & with re-usable components"
        benefits={getLandingPageBenefits()}
      />
    </PageTemplate>
  );
}

function getLandingPageBenefits(): TBenefit[] {
  return [
    {
      icon: <PuzzleSVG />,
      title: "Fully compatible",
      description:
        "Everything that works in Threejs also works in react-three-fiber",
    },
    {
      icon: <PerformanceSVG />,
      title: "Top performance",
      description:
        "Rendering performance is up to Threejs and the GPU. Components may participate in the renderloop outside of React, without any additional overhead.",
    },
    {
      icon: <ReactSVG />,
      title: "React ecosystem",
      description:
        "Stick to the technologies you already now and make use of the huge ecosystem behind React.",
    },
    {
      icon: <CrossPlatformSVG />,
      title: "Cross platform",
      description:
        "Write once, run anywhere. With react on the web and react-native on your mobile phone.",
    },
  ];
}
