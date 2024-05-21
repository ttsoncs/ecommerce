"use client";

import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

function Banner({ children }) {
  return (
    <Wrapper>
      <Text>Welcome! Portfolio Under Development.</Text>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: grid;
  place-content: center;
  position: sticky;
  top: 0;

  height: 32px;

  background-color: white;
`;

const Text = styled.p`
  color: black;

  font-size: 15px;
  font-weight: var(--font-weight-medium);

  text-align: center;

  white-space: nowrap;
  overflow: auto;
`;

export default Banner;
