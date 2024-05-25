import Image from "next/image";

import React from "react";
import styled from "styled-components";

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
          alt="About page"
          priority={true}
        />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  width: var(--size-toggle);
  height: var(--size-toggle);
`;

const ImageWrapper = styled.div`
  position: relative;

  width: var(--width);
  height: var(--height);
`;

export default ToggleCart;
