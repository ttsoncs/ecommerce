import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function DesktopNavLeft() {
  return (
    <Wrapper>
      <Button type="button">Shop</Button>
      <Button type="button">Search</Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex: 1;
  gap: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Button = styled.button`
  color: var(--color-black-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);

  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  transition: color 200ms ease;

  &:hover {
    color: var(--color-hover);
  }
`;

export default DesktopNavLeft;
