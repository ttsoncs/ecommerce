import React from "react";
import styled from "styled-components";

import ToggleCart from "./ToggleCart";
import ToggleMenu from "./ToggleMenu";

import { QUERIES } from "@/constants";

function MobileNavRight({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleCart {...delegated} />
      <ToggleMenu {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    gap: 16px;
  }
`;

export default MobileNavRight;
