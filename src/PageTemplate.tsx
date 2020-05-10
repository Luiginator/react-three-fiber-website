import React from 'react';
import styled from 'styled-components';

import GithubBadge from '@components/GithubBadge';
import Footer from '@components/Footer';
import useWindowScrollPosition from './hooks/useScrollPosition';
import { color, device } from '@styles';

type TPageTemplateProps = {
  readonly children: React.ReactNode;
};

export default function PageTemplate({ children }: TPageTemplateProps) {
  const { y } = useWindowScrollPosition();

  return (
    <div>
      {children}
      <GithubLogoPosition large={y === 0}>
        <GithubBadge />
      </GithubLogoPosition>
      <Footer />
    </div>
  );
}

const GithubLogoPosition = styled.div<{ large: boolean }>`
  position: fixed;

  width: ${(props) => (props.large ? '180px' : '130px')};
  background: ${color.darkPrimary};
  transition: all 300ms linear;
  z-index: 1000;
  right: 0;
  top: 0;

  ${device.large} {
    top: 0;
    right: 50px;
    width: ${(props) => (props.large ? '220px' : '150px')};
  }
`;
