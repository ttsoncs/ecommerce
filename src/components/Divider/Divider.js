"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Divider({ size = 0 }) {
  return (
    <Wrapper
      style={{
        "--size": `${size}px`,
      }}
    />
  );
}

const Wrapper = styled.hr`
  opacity: 30%;

  color: var(--color-divider);

  margin-block: var(--size);

  @media ${QUERIES.phoneAndSmaller} {
    margin-block: calc(var(--size) * 0.6);
  }
`;

export default Divider;
