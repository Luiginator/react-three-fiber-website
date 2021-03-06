import React, { useState } from 'react';
import styled from 'styled-components';
import { partialRight } from 'lodash';

import Code from './code/Code';
import Sankey from './Sankey';
import { color, colorPalette, fontSize, space } from '@styles';

type TCodeComparisonProps = {
  readonly codeLeft: string;
  readonly codeRight: string;
  readonly comparisons: { source: number[]; target: number[] }[];
};

export default function CodeComparison({
  codeLeft,
  codeRight,
  comparisons,
}: TCodeComparisonProps) {
  const [activeSelection, setActiveSelection] = useState(-1);

  const activeComparison =
    activeSelection > -1
      ? comparisons[activeSelection]
      : { source: [], target: [] };

  const handleHoverLine = (
    line: number,
    section: 'source' | 'target',
  ): void => {
    const selection = comparisons.findIndex(
      (comparison) => comparison[section].indexOf(line + 1) > -1,
    );

    setActiveSelection(selection);
  };

  const handleHoverSankey = (index) => setActiveSelection(index);

  const renderCode = (
    section: 'source' | 'target',
    title: string,
    code: string,
  ): React.ReactNode => {
    return (
      <div>
        <CodeTitle>{title}</CodeTitle>
        <CodeStyled
          code={code}
          highlightedLines={activeComparison[section].map((l) => l - 1)}
          highlightColor={colorPalette[activeSelection]}
          onHoverLine={partialRight(handleHoverLine, section)}
        />
      </div>
    );
  };

  const renderSankey = (): React.ReactNode => {
    return (
      <div>
        <CodeTitle>&nbsp;</CodeTitle>
        <Sankey
          codeLinks={comparisons}
          handleHoverElement={handleHoverSankey}
        />
      </div>
    );
  };

  return (
    <CodeComparisonWrapper>
      {renderCode('source', 'ThreeJS', codeLeft)}
      {renderSankey()}
      {renderCode('target', 'react-three-fiber', codeRight)}
    </CodeComparisonWrapper>
  );
}

const CodeComparisonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const CodeStyled = styled(Code)`
  code {
    margin-right: ${space.medium};
  }
`;

const CodeTitle = styled.div`
  color: ${color.lightPrimary};
  font-weight: bold;
  font-size: ${fontSize.large};
  padding-bottom: ${space.small};
  text-align: center;
`;
