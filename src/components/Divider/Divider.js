"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Divider({ size = 0, hasUnit = false }) {
  const finalSize = hasUnit ? size : `${size}px`;

  return (
    <StyledHr
      style={{
        "--size": finalSize,
      }}
    />
  );
}

const StyledHr = styled.hr`
  opacity: 30%;

  color: var(--color-rule);

  margin-block: var(--size);

  @media ${QUERIES.phoneAndSmaller} {
    margin-block: calc(var(--size) * 0.6);
  }
`;

export default Divider;
