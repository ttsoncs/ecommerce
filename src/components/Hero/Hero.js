"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <MaxWidthWrapper>
      {/* <NameBadge /> */}
      <Wrapper />
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.main`
  display: grid;

  margin-inline: var(--space);

  /* padding: var(--space-header); */

  border: 1px solid var(--color-border);
  border-top: none;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrapper = styled.section`
  grid-column: 1 / -1;
  aspect-ratio: 2/3;

  margin-inline: auto;
  margin-block: var(--space-card);

  width: min(288px, 100%);

  background-color: red;
`;

// const NameBadge = styled.section`
//   grid-column: 1 / -1;
//   /* aspect-ratio: 2/3; */

//   width: min(320px, 100%);

//   margin-inline: auto;

//   border-radius: 40px;

//   background-color: var(--color-background-card);
// `;

export default Hero;
