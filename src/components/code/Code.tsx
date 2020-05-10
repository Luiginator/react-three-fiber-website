import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { partial } from 'lodash';

import Prism from './prism.js';
import { prismTheme } from './prismTheme';
import { fontSize, space } from '@styles';

type TCodeProps = {
  readonly code: string;
  readonly highlightedLines?: number[];
  readonly highlightColor?: string;
  readonly className?: string;
  readonly onHoverLine?: (highlightIndex: number) => void;
};

export default function Code({
  code,
  className,
  onHoverLine,
  highlightedLines,
  highlightColor,
}: TCodeProps) {
  const wrapper = useRef();

  useEffect(() => {
    Prism.highlightAll();
  }, [wrapper, code]);

  const handleCodeLineMouseOver = (index: number): void => {
    if (onHoverLine) onHoverLine(index);
  };

  const handleOnMouseLineOver = (index) => {
    handleCodeLineMouseOver(index);
  };

  const renderCodeLine = (codeLine: string, index: number): React.ReactNode => {
    const isHighlighted = highlightedLines.indexOf(index) > -1;

    return (
      <CodeLine
        key={index}
        highlightColor={highlightColor}
        isHighlighted={isHighlighted}
        onMouseOver={partial(handleOnMouseLineOver, index)}
      >
        <LineNumber>{index + 1}</LineNumber>
        <code data-line-index={index}>{codeLine}</code>
      </CodeLine>
    );
  };

  return (
    <CodeWrapper className={className}>
      <div className="language-javascript" ref={wrapper}>
        {code.split('\n').map(renderCodeLine)}
      </div>
    </CodeWrapper>
  );
}

export const CodeWrapper = styled.div`
  flex: 1;
  padding: ${space.small} 0;
  overflow: auto;
  background: rgba(102, 51, 153, 0.1);
  color: #2c3e50;
  font-size: ${fontSize.small};
  border-radius: 15px 0 0 5px;
  background: #334150;

  ${prismTheme}
`;

const CodeLine = styled.pre<{ isHighlighted: boolean; highlightColor: string }>`
  position: relative;
  padding: 0 ${space.small};
  display: flex;
  align-items: baseline;
  cursor: text;
  line-height: 1.5em;
  justify-content: flex-start;
  border-left: 10px solid transparent;
  border-left-color: ${(props) => props.isHighlighted && props.highlightColor};
  background: #334150;
  background: ${({ isHighlighted, highlightColor }) => {
    return isHighlighted && highlightColor && rgba(highlightColor, 0.3);
  }};
  transition: all 200ms linear;

  code[class*='language-'],
  pre[class*='language-'] {
    background: none;
  }
  &:hover {
    background: rgba(#334150, 0.3);
    cursor: pointer;
  }
`;

const LineNumber = styled.div`
  padding: 0.1em 0;
  font-size: 0.8em;
  flex: 0 0 3em;
  user-select: none;
  color: white;
`;
