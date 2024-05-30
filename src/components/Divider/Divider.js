"use client";

import React from "react";
import styled from "styled-components";

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
`;

export default Divider;
