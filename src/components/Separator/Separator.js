"use client";

import React from "react";
import styled from "styled-components";

function Separator() {
  return <Wrapper>|</Wrapper>;
}

const Wrapper = styled.span`
  position: relative;
  top: -1px;

  margin-inline: 8px;
  color: var(--color-separator);
`;

export default Separator;
