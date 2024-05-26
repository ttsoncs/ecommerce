import React from "react";
import styled from "styled-components";

import ToggleCart from "./ToggleCart";
import ToggleSignin from "./ToggleSignin";
import ToggleMenu from "./ToggleMenu";

import { QUERIES } from "@/constants";

function NavRight({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleCart {...delegated} />
      <ToggleMenu {...delegated} />
      <ToggleSignin {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

export default NavRight;
