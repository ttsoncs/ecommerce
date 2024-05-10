import React from "react";
import styled from "styled-components";

import DesktopLinks from "./DesktopLinks";

import { QUERIES } from "@/constants";

function DesktopNav() {
  return (
    <Wrapper>
      <DesktopLinks />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  gap: 40px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default DesktopNav;
