"use client";

import React from "react";
import styled from "styled-components";

function Banner({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: grid;
  place-content: center;
  position: sticky;
  top: 0;

  height: 32px;

  background-color: black;
`;

const Text = styled.p`
  color: white;

  font-size: 14px;
  font-weight: var(--font-weight-medium);

  text-align: center;

  margin-inline: 16px;

  white-space: nowrap;
  overflow: auto;
`;

export default Banner;
