import styled from "styled-components";
import { fontSize } from "@styles/typography";
import { space } from "@styles/spacing";
import { color } from "@styles/colors";

export const H2 = styled.h2`
  font-size: ${fontSize.xxLarge};
  text-transform: uppercase;
  color: ${color.lightPrimary};
  padding-bottom: ${space.large};
  text-align: center;
`;
