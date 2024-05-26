import Image from "next/image";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function ToggleSearch({ isModalOpen, handelToggle }) {
  return (
    <Wrapper
      type="button"
      onClick={handelToggle}
    >
      <ImageWrapper
        style={{
          "--width": `16px`,
          "--height": `16px`,
        }}
      >
        <Image
          src="/images/search.svg"
          fill={true}
          alt="About page"
          priority={true}
        />
      </ImageWrapper>
      <Text>Search</Text>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  z-index: 1;
  
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

    width: var(--size-toggle);
    height: var(--size-toggle);
  }
`;

const ImageWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    
    position: relative;

    width: var(--width);
    height: var(--height);
  }
`;

const Text = styled.span`
  color: var(--color-black-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default ToggleSearch;
