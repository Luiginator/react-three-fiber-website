import React, { useRef } from 'react';
import { rgba } from 'polished';
import colorPalette from '@styles/colorPalette';

const sankeyStartY = -34;
const sankeyStartX = 0;
const lineHeight = 26.53;
const sankeyWidth = 110;

export default function Sankey({ codeLinks, handleHoverElement }) {
  const lines = codeLinks.map((link) =>
    createNode(
      link.source[0],
      link.source.length,
      link.target[0],
      link.target.length,
    ),
  );

  return (
    <svg width={`${sankeyWidth}px`} height="100%">
      <g fill="none" strokeOpacity={1}>
        {lines.map((line, i) => {
          const path = link(line);
          return (
            <path
              d={path}
              strokeWidth={3}
              fill={rgba(colorPalette[i], 0.5)}
              onMouseOver={() => handleHoverElement(i)}
              onMouseOut={() => handleHoverElement(-1)}
            />
          );
        })}
      </g>
    </svg>
  );
}

function createNode(sourceLines, sourceWidth, targetLines, targetWidth) {
  return {
    dy: 100, //link height, same as source.dy?
    source: {
      dx: sankeyStartX, //node width
      dy: lineHeight * sourceWidth, //node height
      x: sankeyStartX, //node position
      y: sankeyStartY + lineHeight * (sourceLines - 1),
    },
    sy: 0, //y-offset of link from top of source node
    target: {
      dx: 0, //node width
      dy: lineHeight * targetWidth, //node height
      x: sankeyWidth, //node position
      y: sankeyStartY + lineHeight * (targetLines - 1),
    },
    ty: 0, //y-offset of link from top of target node
  };
}

function link(d) {
  const curvature = 0.4;
  const x0 = d.source.x + d.source.dx,
    x1 = d.target.x,
    xi = interpolateNumber(x0, x1),
    x2 = xi(curvature),
    x3 = xi(1 - curvature),
    y0 = d.source.y + d.sy + d.dy / 2,
    y1 = d.target.y + d.ty + d.dy / 2;
  return `M${x0},${y0}C${x2},${y0} ${x3},${y1} ${x1},${y1}L${x1},${
    y1 + d.target.dy
  }C${x3},${y1 + d.target.dy} ${x2},${y0 + d.source.dy} ${x0},${
    y0 + d.source.dy
  }L${x0},${y0}`;
}

function interpolateNumber(a, b) {
  return (
    (a = +a),
    (b = +b),
    function (t) {
      return a * (1 - t) + b * t;
    }
  );
}
