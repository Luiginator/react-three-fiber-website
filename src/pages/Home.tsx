import React from "react";
import PageTemplate from "../PageTemplate";
import HeroSlider from "src/blocks/HeroSlider";
import Benefits, { TBenefit } from "src/blocks/Benefits";

import PuzzleSVG from "@icons/puzzle";
import PerformanceSVG from "@icons/performance";
import ReactSVG from "@icons/react";
import CrossPlatformSVG from "@icons/cross_platform";
import GettingStarted from "src/blocks/gettingStarted";
import CommunityResources from "src/blocks/CommunityResources";

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
      <GettingStarted />
      <CommunityResources resources={getLandingPageResources()} />
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

function getLandingPageResources() {
  return [
    {
      title: "Documentation & Learning",
      entries: [
        {
          title: "Threejs documentation",
          description:
            "Learn what a scene, camera, mesh, geometry and material is and how they can be used",
          url:
            "https://threejs.org/docs/#manual/en/introduction/Creating-a-scene",
        },
        {
          title: "react-three-fiber documentation",
          description:
            "Detailed documentation about the API react-three-fiber provides you",
          url: "https://github.com/react-spring/react-three-fiber",
        },
        {
          title: "Three.js Fundamentals",
          description: "A set of articles to help learn Three.js.",
          url: "https://threejsfundamentals.org/",
        },
        {
          title: "Discover Three.js",
          description: "The mssing manual for three.js",
          url: "https://discoverthreejs.com/",
        },
      ],
    },
    {
      title: "Tutorials",
      entries: [
        {
          title: "Animation and 3D in react-three-fiber — Learn With Jason",
          description:
            "Get to know react-three-fiber with the creator of the renderer",
          url: "https://www.youtube.com/watch?v=1rP3nNY2hTo",
        },
        {
          title: "Write three.js in React Using react-three-fiber",
          description:
            "Learn what a scene, camera, mesh, geometry and material is and how they can be used",
          url: "https://alligator.io/react/react-with-threejs",
        },
        {
          title: "3D Data Visualization with React and Three.js",
          description:
            "Animate 100.000 points using InstancedMesh with react-three-fiber",
          url:
            "https://medium.com/cortico/3d-data-visualization-with-react-and-three-js-7272fb6de432",
        },
      ],
    },
    {
      title: "Code examples",
      entries: [
        {
          title: "Hello World",
          description:
            "Get familiar with the basics of react free fiber by creating a canvas with rotating boxes",
          url: "https://codesandbox.io/s/rrppl0y8l4",
        },
      ],
    },
  ];
}
