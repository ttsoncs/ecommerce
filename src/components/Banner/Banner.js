"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Banner({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: var(--height-banner);

  background-color: var(--color-banner);
  overflow: auto;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: start;
  }
`;

const Text = styled.p`
  color: var(--color-white-text);

  font-size: 14px;
  font-weight: var(--font-weight-medium);

  text-align: center;

  margin-inline: 16px;

  white-space: nowrap;
`;

export default Banner;
