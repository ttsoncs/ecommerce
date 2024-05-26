import React from "react";
import styled from "styled-components";

import ToggleSearch from "./ToggleSearch";
import ToggleShop from "./ToggleShop";

function NavLeft({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleShop {...delegated} />
      <ToggleSearch {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 48px;
`;

export default NavLeft;
