"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Rule() {
  return <Wrapper />;
}

const Wrapper = styled.hr`
  opacity: 30%;

  color: var(--color-rule);

  margin-block: 80px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 60px;
  }
`;

export default Rule;
