"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Testimonial() {
  return (
    <Wrapper>
      <Text>The Squad is Snacking!</Text>
      <CardWrapper>
        <Card1 />
        <Card2 />
        <Card3 />
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space-phone);
  }
`;

const Text = styled.p`
  margin-bottom: 140px;

  color: var(--color-black-text);

  font-size: 36px;
  font-weight: var(--font-weight-medium);

  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    margin-bottom: 48px;

    font-size: 32px;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const Card1 = styled.section`
  height: 640px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

const Card2 = styled.section`
  height: 640px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

const Card3 = styled.section`
  height: 640px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 448px;
  }
`;

export default Testimonial;
