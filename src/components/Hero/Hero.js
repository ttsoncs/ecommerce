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
          </NameWrapper>
          <DotBackground>
            {/* <TextWrapper>
              <Name>SON</Name>
              <Title>Intern</Title>
            </TextWrapper> */}
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
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-radius: 16px;
  border: 1px solid var(--color-border);

  background-color: var(--color-background-card);

  overflow: hidden;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;

const Holder = styled.div`
  position: absolute;

  align-self: center;

  width: 17.5%;
  height: 2%;

  margin-top: var(--space-card);

  border-radius: 10px;

  background-color: white;
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
