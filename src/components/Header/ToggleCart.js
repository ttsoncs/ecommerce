import Image from "next/image";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function ToggleCart({ isModalOpen, handelToggle }) {
  return (
    <Wrapper
      type="button"
      onClick={handelToggle}
    >
      <ImageWrapper
        style={{
          "--width": `20px`,
          "--height": `20px`,
        }}
      >
        <Image
          src="/images/shopping-cart.svg"
          fill={true}
          alt="Shopping cart"
          priority={true}
        />
      </ImageWrapper>
      <Quantity>3</Quantity>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  height: var(--size-toggle);

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
    z-index: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  width: var(--width);
  height: var(--height);
`;

const Quantity = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  padding-inline: 4px;

  border: 2px solid var(--color-background);
  border-radius: 16px;

  margin-left: -4px;

  color: var(--color-white-text);
  background-color: var(--color-quantity);

  font-size: 14px;
  font-weight: var(--font-weight-medium);
`;

export default ToggleCart;
