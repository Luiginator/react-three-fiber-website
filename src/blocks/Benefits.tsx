import React from 'react';
import styled from 'styled-components';

import { Container, Column, Row } from '@components/Grid';
import Benefit from '@components/Benefit';
import { device } from '@styles/screens';
import { space } from '@styles/spacing';
import { fontSize } from '@styles/typography';
import { color } from '@styles/colors';

export type TBenefit = {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
};

type TBenefitsProps = {
  readonly headline: React.ReactNode;
  readonly benefits: TBenefit[];
};

export default function Benefits({ headline, benefits }: TBenefitsProps) {
  const renderBenefit = (
    { icon, title, description }: TBenefit,
    i: number,
  ): React.ReactNode => {
    return (
      <Column className="col-12 col-lg-6" key={i}>
        <Benefit icon={icon} title={title} description={description} />
      </Column>
    );
  };

  return (
    <Container>
      <BenefitsRow>
        <Column className="col-12 col-lg-4">
          <Headline>{headline}</Headline>
        </Column>
        <Column className="col-12 col-lg-8">
          <Row>{benefits.map(renderBenefit)}</Row>
        </Column>
      </BenefitsRow>
    </Container>
  );
}

const BenefitsRow = styled(Row)`
  padding: ${space.medium} 0;

  ${device.large} {
    padding: ${space.large} 0;
  }
`;

const Headline = styled.h2`
  font-size: ${fontSize.xLarge};
  color: ${color.darkPrimary};
  line-height: 1.5;
  padding-bottom: ${space.large};
  text-align: center;

  ${device.large} {
    text-align: left;
  }
`;
