import React from "react";
import styled from "styled-components";

import ToggleSearch from "./ToggleSearch";

function NavLeft({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleSearch {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 16px;
`;

export default NavLeft;
