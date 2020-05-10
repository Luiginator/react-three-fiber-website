import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { partial } from 'lodash';

import { color, device, fontSize, space } from '@styles';

const exampleImportOptions = { ssr: false };

const Swarm = dynamic(() => import('../examples/swarm'), exampleImportOptions);
const RotatingBoxes = dynamic(
  () => import('../examples/rotating_boxes'),
  exampleImportOptions,
);

type TShowcase = {
  readonly component: React.ComponentType<{}>;
  readonly name: string;
};

const showcases: TShowcase[] = [
  { component: Swarm, name: 'Swarm' },
  { component: RotatingBoxes, name: 'Instanced Mesh' },
];

export default function ShowcaseSlider() {
  const [step, setStep] = useState(0);

  const activeStep = showcases[step];
  const Component = activeStep.component;
  const name = activeStep.name;

  const renderShowcaseStep = (_: TShowcase, i: number): React.ReactNode => {
    return (
      <StepBullet active={step === i} key={i} onClick={partial(setStep, i)} />
    );
  };

  return (
    <Showcase>
      <ShowcaseInner>
        <Component />
        <Step>
          <StepName>{name}</StepName>
          <StepNavigation>{showcases.map(renderShowcaseStep)}</StepNavigation>
        </Step>
      </ShowcaseInner>
    </Showcase>
  );
}

const Showcase = styled.div`
  width: 100%;
  min-height: calc(100vh - 2 * ${space.small});

  canvas {
    height: calc(100vh - 2 * ${space.small});
    width: 100vw;
  }
`;

const ShowcaseInner = styled.div`
  background: ${color.darkPrimary};
  margin: ${space.small};
`;

const Step = styled.div`
  position: absolute;
  right: 0;
  bottom: 150px;
  left: 0;

  ${device.large} {
    left: auto;
    right: 5rem;
    bottom: 55px;
  }
`;

const StepName = styled.div`
  color: ${color.lightPrimary};
  text-transform: uppercase;
  font-size: ${fontSize.large};
  display: none;

  ${device.large} {
    display: block;
    font-size: 60px;
  }
`;

const StepNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${device.large} {
    justify-content: flex-end;
  }
`;

const StepBullet = styled.div<{ active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-left: ${space.small};
  transition: all 100ms linear;
  cursor: pointer;

  background: ${(props) =>
    props.active ? color.lightPrimary : 'rgba(255, 255, 255, 0.4)'};

  &:hover {
    background: ${color.lightPrimary};
  }
`;
