"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <MaxWidthWrapper>
      <Widget></Widget>
      <Widget></Widget>
      <Widget></Widget>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.main`
  display: grid;
  gap: 8px;

  margin-inline: var(--space);

  border: 1px solid var(--color-border);
  border-top: none;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Widget = styled.section`
  aspect-ratio: 1/1;

  width: min(256px, 100%);

  margin-inline: auto;
  margin-block: var(--space-header);

  border-radius: 40px;

  background-color: var(--color-background-nav);
`;

export default Hero;
