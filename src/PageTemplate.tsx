import React from "react";
import styled from "styled-components";
import { device } from "@styles/screens";
import GithubBadge from "@components/GithubBadge";
import useWindowScrollPosition from "./hooks/useScrollPosition";

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
    </div>
  );
}

const GithubLogoPosition = styled.div<{ large: boolean }>`
  position: fixed;

  width: ${(props) => (props.large ? "180px" : "130px")};
  background: black;
  transition: all 300ms linear;
  z-index: 1000;
  right: 0;
  top: 0;

  ${device.large} {
    top: 0;
    right: 5rem;
    width: ${(props) => (props.large ? "220px" : "150px")};
  }
`;
