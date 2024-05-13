"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <MaxWidthWrapper>
      <NameBadge />
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.main`
  display: grid;
  gap: 8px;

  margin-inline: var(--space);

  padding: var(--space-header);

  border: 1px solid var(--color-border);
  border-top: none;

  aspect-ratio: 1/2;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NameBadge = styled.section`
  grid-column: 1 / -1;
  /* aspect-ratio: 2/3; */

  width: min(320px, 100%);

  margin-inline: auto;

  border-radius: 40px;

  background-color: var(--color-background-card);
`;

export default Hero;
