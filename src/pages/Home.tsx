import React from "react";
import PageTemplate from "../PageTemplate";
import HeroSlider from "src/blocks/HeroSlider";

export default function Home() {
  return (
    <PageTemplate>
      <HeroSlider
        headline="React three fiber"
        subheadline="is a react renderer for three.js"
      />
    </PageTemplate>
  );
}
