import React from "react";
import styled from "styled-components";

import ToggleSearch from "./ToggleSearch";

import { QUERIES } from "@/constants";

function MobileNavLeft({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleSearch {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 16px;
  }
`;

export default MobileNavLeft;
