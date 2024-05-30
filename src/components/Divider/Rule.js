"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Divider() {
  return <StyledHr />;
}

const StyledHr = styled.hr`
  opacity: 40%;

  color: var(--color-rule);

  margin-block: 80px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 60px;
  }
`;

export default Divider;
