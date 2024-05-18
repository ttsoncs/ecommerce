"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <NameBadge>
          <Overlay>
            <TextWrapper>
              <Name>Son</Name>
              <Title>Front End Intern</Title>
            </TextWrapper>
          </Overlay>
        </NameBadge>
      </Wrapper>
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
  justify-self: center;
  aspect-ratio: 2 / 3;

  margin: var(--space-card);

  width: min(288px, 100%);
`;

const NameBadge = styled.section`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  border-radius: 40px;

  background-color: var(--color-background-card);

  overflow: hidden;
`;

const Overlay = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 60%;

  margin: var(--space);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  background-image: radial-gradient(
    var(--color-border) 1px,
    var(--color-background-card) 1px
  );
  background-size: 14px 14px;
  background-position: center;

  overflow: hidden;
`;

const TextWrapper = styled.div`
  height: 60%;
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);

  margin-left: var(--space);

  text-transform: uppercase;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: var(--font-weight-regular);

  color: var(--color-primary-text);

  margin-left: var(--space);
`;

export default Hero;
