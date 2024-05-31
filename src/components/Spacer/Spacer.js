"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Spacer({ size = 0, hasUnit = false }) {
  const finalSize = hasUnit ? size : `${size}px`;

  return (
    <Space
      style={{
        "--size": finalSize,
      }}
    />
  );
}

const Space = styled.div`
  height: var(--size);

  @media ${QUERIES.phoneAndSmaller} {
    height: calc(var(--size) * 0.8);
  }
`;

export default Spacer;
