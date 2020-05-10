import React from 'react';
import styled from 'styled-components';

import { fontSize } from '@styles/typography';
import { Container, Row, Column } from '@components/Grid';
import Resource, { TResource } from '@components/Resource';
import { H2Dark } from '@components/Typography';
import { space } from '@styles/spacing';
import { device } from '@styles/screens';

type TCommunityResourcesProps = {
  readonly resources: { title: string; entries: TResource[] }[];
};

export default function CommunityResources({
  resources,
}: TCommunityResourcesProps) {
  return (
    <CommunityResourceWrapper>
      <H2Dark>How to proceed?</H2Dark>
      <Row>
        {resources.map((resourceColumn, index) => (
          <Column className="col-12 col-lg-4" key={index}>
            <CommunityResourceHeadline>
              {resourceColumn.title}
            </CommunityResourceHeadline>
            {resourceColumn.entries.map((entry, resourceIndex) => (
              <Resource {...entry} key={resourceIndex} />
            ))}
          </Column>
        ))}
      </Row>
    </CommunityResourceWrapper>
  );
}

const CommunityResourceWrapper = styled(Container)`
  padding: ${space.large} ${space.small};

  ${device.large} {
    padding: ${space.large} ${space.small};
  }
`;

const CommunityResourceHeadline = styled.h3`
  font-size: ${fontSize.xLarge};
  padding-bottom: ${space.small};
  min-height: 100px;
  padding-top: ${space.medium};
`;
