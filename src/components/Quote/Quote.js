"use client";

import Image from "next/image";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Quote() {
  return (
    <Wrapper>
      <Text>
        We are côlafruits,{" "}
        <Highlight>
          {" "}
          <ImageWrapper>
            <Image
              src="/images/circle.svg"
              fill={true}
              alt="Circle"
              priority={true}
            />
          </ImageWrapper>{" "}
          obsessed
        </Highlight>{" "}
        with flavor and nature{"'"}s finest. Our premium fruits are
        hand-selected for perfection, offering a taste unlike any other. Don{"'"}t
        miss out on our most popular{" "}
        <Highlight>
          {" "}
          <ImageWrapper>
            <Image
              src="/images/clover.svg"
              fill={true}
              alt="Clover"
              priority={true}
            />
          </ImageWrapper>{" "}
          picks!
        </Highlight>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.blockquote`
  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space-phone);
  }
`;

const Text = styled.div`
  color: var(--color-black-text);

  font-size: 40px;
  font-weight: var(--font-weight-regular);

  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 36px;
  }
`;

const Highlight = styled.strong`
  font-weight: var(--font-weight-medium);

  white-space: nowrap;
`;

const ImageWrapper = styled.div`
  display: inline-block;

  position: relative;
  top: 4px;

  width: 36px;
  height: 36px;
`;

export default Quote;
