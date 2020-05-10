import React from "react";
import styled from "styled-components";

import { fontSize } from "@styles/typography";
import { Container, Row, Column } from "@components/Grid";
import Resource from "@components/Resource";
import { H2Dark } from "@components/Typography";
import Highlighted from "@components/Highlighted";
import { space } from "@styles/spacing";
import { device } from "@styles/screens";

type TCommunityResourcesProps = {
  readonly resources: { title: string; entries: any[] }[];
};

export default function CommunityResources({
  resources,
}: TCommunityResourcesProps) {
  return (
    <CommunityResourceWrapper>
      <H2Dark>
        How to <Highlighted>proceed?</Highlighted>
      </H2Dark>
      <Row>
        {resources.map((resourceColumn) => (
          <Column className="col-12 col-lg-4">
            <CommunityResourceHeadline>
              {resourceColumn.title}
            </CommunityResourceHeadline>
            {resourceColumn.entries.map((entry) => (
              <Resource {...entry} />
            ))}
          </Column>
        ))}
      </Row>
    </CommunityResourceWrapper>
  );
}

const CommunityResourceWrapper = styled(Container)`
  padding: ${space.large} 15px;

  ${device.large} {
    padding: ${space.extraLarge} 15px;
  }
`;

const CommunityResourceHeadline = styled.h3`
  font-size: ${fontSize.xLarge};
  padding-bottom: 10px;
  min-height: 100px;
  padding-top: 25px;
`;