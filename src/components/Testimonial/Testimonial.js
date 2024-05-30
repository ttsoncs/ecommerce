"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Testimonial() {
  return (
    <Wrapper>
      <Text>The Squad is Snacking!</Text>
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
  color: var(--color-black-text);

  font-size: 32px;
  font-weight: var(--font-weight-medium);

  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 28px;
  }
`;

export default Testimonial;
