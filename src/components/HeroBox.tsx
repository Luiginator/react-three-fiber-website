import React from 'react';
import styled from 'styled-components';

import { color, device, fontSize, space } from '@styles';

type THeroBoxProps = {
  readonly headline: string;
  readonly subheadline: string;
};

export default function HeroBox({ headline, subheadline }: THeroBoxProps) {
  return (
    <HeroBoxWrapper>
      <HeroBoxHeadline>{headline}</HeroBoxHeadline>
      <HeroBoxSubHeadline>{subheadline}</HeroBoxSubHeadline>
    </HeroBoxWrapper>
  );
}

const HeroBoxWrapper = styled.div`
  background: ${color.darkPrimary};
  padding: ${space.small};
  position: absolute;
  bottom: -${space.small};

  ${device.large} {
    max-width: 400px;
    padding: ${space.medium};
    left: 60px;
  }
`;

const HeroBoxHeadline = styled.h1`
  font-size: ${fontSize.xxLarge};
  line-height: 1;
  color: ${color.lightPrimary};
  padding-right: ${space.large};
  text-transform: uppercase;

  ${device.large} {
    font-size: ${fontSize.xxxLarge};
    line-height: 0.8;
  }
`;

const HeroBoxSubHeadline = styled.div`
  color: ${color.lightPrimary};
  text-transform: uppercase;

  ${device.large} {
    font-size: ${fontSize.xLarge};
  }
`;
