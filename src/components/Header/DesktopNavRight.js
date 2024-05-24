import React from "react";
import styled from "styled-components";

import DesktopLinksRight from "./DesktopLinksRight";

import { QUERIES } from "@/constants";

function DesktopNavRight() {
  return (
    <Wrapper>
      <DesktopLinksRight />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  gap: 64px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default DesktopNavRight;
