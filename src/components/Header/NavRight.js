import React from "react";
import styled from "styled-components";

import ToggleCart from "./ToggleCart";
import ToggleMenu from "./ToggleMenu";

function NavRight({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleCart {...delegated} />
      <ToggleMenu {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 16px;
`;

export default NavRight;
