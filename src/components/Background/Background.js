"use client";

import React from "react";
import styled from "styled-components";

function Background({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.body`
  background-color: var(--color-background);
`;

export default Background;
