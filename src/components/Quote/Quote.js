"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Quote() {
  return (
    <Wrapper>
      <Text>
        <Highlight>We are côlafruits</Highlight>, obsessed with{" "}
        <Highlight>flavor</Highlight> and nature&#39;s finest. Our{" "}
        <Highlight>premium fruits</Highlight> are hand-selected for perfection,
        offering a taste unlike any other. Dive into a world of exquisite
        fruits, bursting with <Highlight>deliciousness!</Highlight>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space-phone);
  }
`;

const Text = styled.h1`
  color: var(--color-black-text);

  font-size: 36px;
  font-weight: var(--font-weight-regular);

  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 32px;
  }
`;

const Highlight = styled.strong`
  font-weight: var(--font-weight-bold);

  color: var(--color-blue);
`;

export default Quote;
