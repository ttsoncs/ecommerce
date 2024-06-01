"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Separator({ children = "|", gap = 0 }) {
  return <Wrapper style={{ "--gap": `${gap}px` }}>{children}</Wrapper>;
}

const Wrapper = styled.span`
  position: relative;
  top: -1px;

  margin-inline: var(--gap);
  color: var(--color-separator);

  @media ${QUERIES.phoneAndSmaller} {
  }
`;

export default Separator;
