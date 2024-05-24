"use client";

import React from "react";
import styled from "styled-components";

function Separator() {
  return <Wrapper>|</Wrapper>;
}

const Wrapper = styled.span`
  margin-inline: 8px;
  color: var(--color-secondary-text);
`;

export default Separator;
