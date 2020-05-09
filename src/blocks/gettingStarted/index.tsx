import React, { useState } from "react";
import styled from "styled-components";
import { range } from "lodash";

import colorPalette from "@styles/colorPalette";
import CodeExplainer from "@components/CodeExplainer";
import Preview from "@components/Preview";
import { getCode } from "./code";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import { StepThree } from "./steps/StepThree";

let colors = [...colorPalette];
const initialBoxes = [
  { position: [0, 0, 0], rotationSpeed: 1, color: colors.shift() },
];

export default function GettingStarted() {
  const [geometryType, setGeometryType] = useState("box");
  const [material, setMaterial] = useState("meshStandardMaterial");
  const [boxes, setBoxes] = useState(initialBoxes);

  return (
    <GettingStartedSectionWrapper>
      <Preview type={geometryType} material={material} boxes={boxes} />
      <CodeExplainer
        codeGroups={[
          {
            lines: [2],
            headline: "Add react-three-fiber to your project",
            text: <StepOne />,
          },
          {
            lines: [10, 11, 12, 16, 17, 18, 19, 20],
            headline: "Create a reusable component",
            text: (
              <StepTwo
                onGeometryChange={setGeometryType}
                onMaterialChange={setMaterial}
              />
            ),
          },
          {
            lines: [6, 14, 15],
            headline: "Add an event listener to the component",
            text:
              "Handling events with react-three-fiber is very similar to handling events with react. Click on a component in the preview to see it scale.",
          },
          {
            lines: [5, 8, 13],
            headline: "Animate the component",
            text:
              "With the useFrame hook we can rotate the mesh on every frame. This happens outside of React without any overhead.",
          },
          {
            lines: [23, 24, 25, ...range(26, 26 + boxes.length + 1)],
            headline: "Render the component in a canvas",
            text: <StepThree boxes={boxes} setBoxes={setBoxes} />,
          },
        ]}
        code={getCode(geometryType, material, boxes)}
      />
    </GettingStartedSectionWrapper>
  );
}

const GettingStartedSectionWrapper = styled.div`
  background: black;
  min-height: 100vh;
  padding: 80px 15px;
`;