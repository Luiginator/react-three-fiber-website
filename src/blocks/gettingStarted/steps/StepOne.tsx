import React from "react";
import styled from "styled-components";

import { device } from "@styles/screens";
import { space } from "@styles/spacing";

export default function StepOne() {
  return (
    <>
      <div>
        Because building dynamic scene graphs declaratively with re-usable
        components makes dealing with Threejs easier and brings order and sanity
        to your codebase.
      </div>
      <Command>npm install react-three-fiber three</Command>
    </>
  );
}

const Command = styled.span`
  background: rgba(102, 51, 153, 0.4);
  border-left: 3px solid rgba(102, 51, 153, 1);
  color: #666;
  padding: ${space.small} ${space.large} ${space.small} ${space.medium};
  border-radius: 0 3px 3px 0;
  font-weight: bold;
  position: relative;
  display: table;
  margin: ${space.small} 0;
  color: white;

  &::before {
    position: absolute;
    left: 10px;
    content: "$";
  }

  ${device.extraLarge} {
    min-width: 300px;
  }
`;
