import Image from "next/image";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function DesktopNavRight() {
  return (
    <Wrapper>
      <Button type="button">
        <ImageWrapper
          style={{
            "--width": `20px`,
            "--height": `20px`,
          }}
        >
          <Image
            src="/images/shopping-cart.svg"
            fill={true}
            alt="About page"
            priority={true}
          />
        </ImageWrapper>
      </Button>
      <Button type="button">Sign in</Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  gap: 64px;

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

const ImageWrapper = styled.div`
  position: relative;

  width: var(--width);
  height: var(--height);
`;

export default DesktopNavRight;
