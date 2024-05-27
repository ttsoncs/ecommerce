"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Quote() {
  return (
    <Wrapper>
      <Text>
        We are Colafruits, obsessed with flavor and nature's finest. Our premium
        fruits are hand-selected for perfection, offering a taste unlike any
        other. Dive into a world of exquisite fruits, bursting with
        deliciousness!
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-block: 80px;
  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 60px;
    margin-inline: var(--space-phone);
  }
`;

const Text = styled.span`
  color: var(--color-black-text);

  font-size: 40px;
  font-weight: var(--font-weight-regular);

  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 32px;
  }
`;

export default Quote;
