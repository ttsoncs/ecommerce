"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { QUERIES } from "@/constants";

function Hero() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <NameBadge>
          <Holder />
          <NameWrapper>
            <Name>The Son</Name>
          </NameWrapper>
          <DotBackground>
            <ImageWrapper>
              <Image
                src="/images/avatar.webp"
                fill={true}
                alt="Avatar"
                priority={true}
                style={{
                  transform: "scale(1.3)",
                }}
              />
            </ImageWrapper>
          </DotBackground>
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
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-radius: 16px;
  border: 1px solid var(--color-border);

  background-color: var(--color-background-card);

  overflow: hidden;
`;

const Holder = styled.div`
  position: absolute;

  align-self: center;

  width: 25%;
  height: 4%;

  margin-top: var(--space-card);

  border-radius: 10px;

  background-color: white;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  flex: 1;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);

  text-transform: uppercase;
`;

const DotBackground = styled.div`
  display: grid;
  place-content: center;

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

const ImageWrapper = styled.div`
  position: relative;
  align-self: center;

  width: 192px;
  height: 192px;

  border-radius: 50%;
  border: 1px solid var(--color-badge);

  background-color: var(--color-badge);

  overflow: hidden;
`;

export default Hero;
