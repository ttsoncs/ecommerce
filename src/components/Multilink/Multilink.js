"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES, MULTI_LINKS } from "@/constants";

function Multilink() {
  return (
    <Wrapper>
      <Logo>colafruits</Logo>
      <LinkWrapper>
      
      </LinkWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space-phone);
  }
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Logo = styled.div`
  color: var(--color-black-text);

  font-size: 19px;
  font-weight: var(--font-weight-medium);
`;

export default Multilink;
