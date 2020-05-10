import React from 'react';
import styled from 'styled-components';

import { color, fontSize, space } from '@styles';

export type TResource = {
  readonly title: string;
  readonly description: string;
  readonly url: string;
};

type TResourceProps = TResource;

export default function Resource({ title, description, url }: TResourceProps) {
  const hostname = new URL(url).hostname;

  return (
    <ResourceWrapper href={url} target="_blank" rel="noreferrer">
      <ResourceTitle>{title}</ResourceTitle>
      <ResourceDescription>{description}</ResourceDescription>
      <ResourceUrl>{hostname}</ResourceUrl>
    </ResourceWrapper>
  );
}

const ResourceTitle = styled.h4`
  font-size: ${fontSize.large};
  padding-bottom: ${space.extraSmall};
  min-height: 60px;
`;

const ResourceWrapper = styled.a`
  min-height: 150px;
  padding: ${space.small} ${space.small} ${space.medium} 0;
  text-decoration: none;
  color: ${color.darkPrimary};
  transition: all 300ms linear;
  border-bottom: 1px solid grey;
  margin-bottom: ${space.small};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    ${ResourceTitle} {
      color: ${color.primary};
    }
  }
`;

const ResourceDescription = styled.div`
  font-size: ${fontSize.small};
  line-height: 1.5;
  padding-bottom: ${space.extraSmall};
  min-height: 60px;
`;

const ResourceUrl = styled.div`
  font-style: italic;
`;
