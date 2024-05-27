"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.main`
  margin-top: 24px;

  height: 640px;

  border-radius: 16px;

  background-color: var(--color-background-card);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space);
    height: 448px;
  }
`;

export default Hero;
