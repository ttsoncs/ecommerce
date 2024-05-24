import React from "react";
import styled from "styled-components";

import DesktopLinksLeft from "./DesktopLinksLeft";

import { QUERIES } from "@/constants";

function DesktopNavLeft() {
  return (
    <Wrapper>
      <DesktopLinksLeft />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  gap: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default DesktopNavLeft;
