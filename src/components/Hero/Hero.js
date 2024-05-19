"use client";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <NameBadge>
          <Company>
            <Holder />
            <Brand>Vercel</Brand>
          </Company>
          <Overlay>
            <TextWrapper>
              <Name>SON</Name>
              <Title>Intern</Title>
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

  border-inline: 1px solid var(--color-border);

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
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-radius: 16px;
  border: 1px solid var(--color-border);

  background-color: var(--color-background-card);

  overflow: hidden;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;

const Holder = styled.div`
  align-self: center;

  width: 25%;
  height: 10%;

  margin-top: var(--space-card);

  border-radius: 10px;

  background-color: white;
`;

const Brand = styled.p`
  font-size: 20px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);

  margin-left: var(--space-card);
`;

const Overlay = styled.div`
  display: flex;
  align-items: flex-end;

  flex: 2;

  margin: var(--space);

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

  margin-left: 12px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: var(--font-weight-regular);

  color: var(--color-secondary-text);

  margin-left: 12px;
  margin-top: 6px;
`;

export default Hero;
