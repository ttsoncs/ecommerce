import React from "react";
import styled from "styled-components";

import ToggleSearch from "./ToggleSearch";

import { QUERIES } from "@/constants";

function DesktopNavLeft({ ...delegated }) {
  return (
    <Wrapper>
      <Button type="button">Shop</Button>
      <ToggleSearch {...delegated} />
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

  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }
`;

export default DesktopNavLeft;
