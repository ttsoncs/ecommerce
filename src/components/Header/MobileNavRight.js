import React from "react";
import styled from "styled-components";

import ToggleMenu from "./ToggleMenu";

import { QUERIES } from "@/constants";

function MobileNavRight({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleMenu {...delegated} />
      <ToggleMenu {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    gap: 32px;
  }
`;

export default MobileNavRight;
