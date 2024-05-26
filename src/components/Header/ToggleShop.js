import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function ToggleShop({ isModalOpen, handelToggle }) {
  return (
    <Wrapper
      type="button"
      onClick={handelToggle}
    >
      Shop
    </Wrapper>
  );
}

const Wrapper = styled.button`
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

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default ToggleShop;