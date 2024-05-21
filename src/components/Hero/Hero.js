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
            <Name>Trinh The Son</Name>
            <Nickname>Captain Teemo</Nickname>
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
  height: 2.5%;

  margin-top: var(--space-card);

  border-radius: 10px;

  background-color: white;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);
`;

const Nickname = styled.p`
  font-size: 17px;
  font-weight: var(--font-weight-regular);

  color: var(--color-secondary-text);
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

  clip-path: circle(50%);

  background-color: var(--color-background-badge);

  overflow: hidden;
`;

export default Hero;
