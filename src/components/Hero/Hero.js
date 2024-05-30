"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <Wrapper>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;

    margin-inline: var(--space-phone);
  }
`;

const Card1 = styled.section`
  grid-column: 1 / -1;

  height: 640px;

  border-radius: 16px;

  background-color: var(--color-blue);

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

const Card2 = styled.section`
  height: 640px;

  border-radius: 16px;

  background-color: var(--color-purple);

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

const Card3 = styled.section`
  height: 640px;

  border-radius: 16px;

  background-color: var(--color-pink);

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

const Card4 = styled.section`
  height: 640px;

  border-radius: 16px;

  background-color: var(--color-green);

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

export default Hero;
