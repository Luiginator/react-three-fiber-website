import React, { useState } from 'react';
import styled from 'styled-components';
import { partial } from 'lodash';
import { rgba } from 'polished';

import Code from './code/Code';
import { color, colorPalette, device, fontSize, space } from '@styles';

type TCodeGroup = {
  lines: number[];
  headline: string;
  text: React.ReactNode;
};

type TCodeExplainerProps = {
  readonly code: string;
  readonly codeGroups: TCodeGroup[];
};

export default function CodeExplainer({
  code,
  codeGroups,
}: TCodeExplainerProps) {
  const [highlightedCode, setHighlightedCode] = useState(-1);
  const highlightGroups = codeGroups.map((group, index) => ({
    lines: group.lines.map((line) => line - 1),
    color: colorPalette[index],
  }));
  const currentSelection = highlightGroups[highlightedCode];

  const handleStepMouseOver = (index: number): void => {
    setHighlightedCode(index);
  };

  const handleStepMouseOut = (): void => {
    setHighlightedCode(-1);
  };

  const handleHoverLine = (line: number): void => {
    const selectionIndex = highlightGroups.findIndex(
      (element) => element.lines.indexOf(line) > -1,
    );
    setHighlightedCode(selectionIndex);
  };

  const renderStep = (group: TCodeGroup, index: number): React.ReactNode => {
    return (
      <div
        key={index}
        onMouseOver={partial(handleStepMouseOver, index)}
        onMouseOut={handleStepMouseOut}
      >
        <CodeHintListItem
          color={colorPalette[index]}
          index={index}
          highlighted={index === highlightedCode}
        >
          {group.headline}
        </CodeHintListItem>
        <CodeHintListItemTextStyled>{group.text}</CodeHintListItemTextStyled>
      </div>
    );
  };

  return (
    <Explainer>
      <Row>
        <CodeWrapper>
          <Code
            highlightColor={currentSelection?.color}
            highlightedLines={currentSelection?.lines || []}
            code={code}
            onHoverLine={handleHoverLine}
          />
        </CodeWrapper>
        <CodeHints>
          <Delimiter />
          <ExplainerWrapper>{codeGroups.map(renderStep)}</ExplainerWrapper>
        </CodeHints>
      </Row>
    </Explainer>
  );
}

function CodeHintListItem({ index, color, children, highlighted }) {
  return (
    <CodeHintListItemStyled color={color} highlighted={highlighted}>
      <ItemCount color={color}>{index + 1}</ItemCount>
      <ItemText>{children}</ItemText>
    </CodeHintListItemStyled>
  );
}

const Delimiter = styled.div`
  width: 10px;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1800px;

  ${device.extraLarge} {
    flex-direction: row;
  }
`;

const CodeHintListItemStyled = styled.div<{ highlighted: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${space.extraSmall};
  padding-left: ${space.small};
  align-items: center;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  transition: all 200ms linear;
  background: ${(props) =>
    props.highlighted ? rgba(props.color, 0.2) : undefined};
`;

const CodeHintListItemTextStyled = styled.div`
  font-weight: normal;
  padding-left: 70px;
  padding: 5px 0px 15px 70px;
  max-width: 700px;
  font-size: ${fontSize.small};
  line-height: 27px;
`;

const ItemCount = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 5px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  color: ${color.lightPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${fontSize.large};
`;

const ItemText = styled.div`
  font-size: ${fontSize.large};
  padding-left: ${space.small};
  color: ${color.lightPrimary};
`;

const CodeWrapper = styled.div`
  flex: 1;
  background: #334150;
  border-radius: 5px 0 0 5px;
  order: 2;

  ${device.large} {
    order: 1;
  }
`;

const CodeHints = styled.div`
  flex: 1;
  background: #334150;
  display: flex;
  flex-direction: row;
  order: 1;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #ddd;

  ${device.large} {
    border-radius: 0 5px 5px 0;
    border-bottom: none;
    border-left: 1px solid #ddd;
  }
`;

export const Explainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  flex-direction: column;
  max-width: 1800px;
  margin: 0 auto;
`;

const ExplainerWrapper = styled.div`
  padding-top: 10px;
`;
