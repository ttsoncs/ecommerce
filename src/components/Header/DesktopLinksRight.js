import Link from "next/link";
import Image from "next/image";

import React from "react";
import styled from "styled-components";

function DesktopLinksRight() {
  return (
    <>
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
    </>
  );
}

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

export default DesktopLinksRight;
