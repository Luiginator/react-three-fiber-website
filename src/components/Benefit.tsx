import React from 'react';
import styled from 'styled-components';

import { device } from '@styles/screens';
import { color } from '@styles/colors';
import { fontSize } from '@styles/typography';
import { space } from '@styles/spacing';

export type TBenefitProps = {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
  readonly onMouseOver?: () => void;
};

export default function Benefit({
  icon,
  title,
  description,
  onMouseOver,
}: TBenefitProps) {
  return (
    <BenefitWrapper onMouseOver={onMouseOver}>
      <Icon>{icon}</Icon>
      <BenefitHeadline>{title}</BenefitHeadline>
      <Description>{description}</Description>
    </BenefitWrapper>
  );
}

const Icon = styled.div`
  background: ${color.lightPrimary};
  width: 75px;
  height: 75px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  svg {
    width: 75px;
    height: 75px;
  }

  ${device.large} {
    margin: 0;
  }
`;

const BenefitHeadline = styled.h3`
  font-size: ${fontSize.large};
  font-weight: bold;
  padding: ${space.medium} 0 ${space.small};
`;

const BenefitWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding-bottom: ${space.medium};

  &:hover {
    ${Icon} {
      svg {
        fill: ${color.primary};

        .react-path {
          fill: ${color.primary};
        }
      }
    }

    ${BenefitHeadline} {
      color: ${color.primary};
    }
  }

  ${device.large} {
    text-align: left;
  }
`;

const Description = styled.div`
  font-size: ${fontSize.medium};
  line-height: 1.5;
`;
