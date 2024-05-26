import Image from "next/image";

import React from "react";
import styled from "styled-components";

import ToggleCart from "./ToggleCart";

import { QUERIES } from "@/constants";

function DesktopNavRight({ ...delegated }) {
  return (
    <Wrapper>
      <ToggleCart {...delegated} />
      <Button type="button">Sign in</Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
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

const ImageWrapper = styled.div`
  position: relative;

  width: var(--width);
  height: var(--height);
`;

export default DesktopNavRight;
