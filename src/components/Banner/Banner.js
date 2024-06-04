"use client";

import React from "react";
import styled from "styled-components";

import Content from "./Content";

import { QUERIES, BANNER_CONTENTS } from "@/constants";

function Banner() {
  return (
    <Wrapper>
      <Text>
        <Content content={BANNER_CONTENTS} />
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: grid;
  place-content: center;

  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  z-index: 2;

  height: var(--height-banner);

  background-color: var(--color-banner);

  overflow: auto;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: start;
  }
`;

const Text = styled.p`
  color: var(--color-white-text);

  font-size: 14px;
  font-weight: var(--font-weight-medium);

  margin-inline: 16px;

  white-space: nowrap;
`;

export default Banner;
