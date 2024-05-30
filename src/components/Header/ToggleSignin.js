import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function ToggleSignin({ isModalOpen, handelToggle }) {
  return (
    <Wrapper
      type="button"
      onClick={handelToggle}
    >
      Sign in
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;

  z-index: 1;

  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  color: var(--color-black-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);

  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }

  &::after {
    --tap-increment: -8px;
    content: "";
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default ToggleSignin;
