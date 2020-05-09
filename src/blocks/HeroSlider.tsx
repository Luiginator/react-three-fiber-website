import React from "react";
import styled from "styled-components";
import ShowcaseSlider from "@components/Showcase";
import HeroBox from "@components/HeroBox";

type THeroSliderProps = {
  readonly headline: string;
  readonly subheadline: string;
};

export default function HeroSlider({
  headline,
  subheadline,
}: THeroSliderProps) {
  return (
    <HeroSliderWrapper>
      <ShowcaseSlider />
      <HeroBox headline={headline} subheadline={subheadline} />
    </HeroSliderWrapper>
  );
}

const HeroSliderWrapper = styled.div`
  position: relative;
`;
