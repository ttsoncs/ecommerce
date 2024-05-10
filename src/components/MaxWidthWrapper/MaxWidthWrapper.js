"use client";

import React from "react";
import styled from "styled-components";

import { BREAKPOINTS, QUERIES } from "@/constants";

function MaxWidthWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin-inline: auto;
  max-width: ${BREAKPOINTS.laptopMax}px;
  min-height: 100%;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: ${BREAKPOINTS.tabletMax}px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: ${BREAKPOINTS.phoneMax}px;
  }
`;

export default MaxWidthWrapper;
