"use client";

import React from "react";
import styled from "styled-components";

import CTA from "./CTA";

import { QUERIES, BANNER_CTA } from "@/constants";

function Banner() {
  return (
    <Wrapper>
      <CTAWrapper>
        <CTA content={BANNER_CTA} />
      </CTAWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 2;

  height: var(--height-banner);

  background-color: var(--color-banner);

  overflow: auto;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: start;
  }
`;

const CTAWrapper = styled.p`
  color: var(--color-white-text);

  font-size: 14px;
  font-weight: var(--font-weight-medium);

  margin-inline: 16px;

  white-space: nowrap;
`;

export default Banner;
