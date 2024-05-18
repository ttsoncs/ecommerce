"use client";

import React from "react";
import styled from "styled-components";

import { DAYS } from "@/constants";
import { QUERIES } from "@/constants";

function Footer() {
  return (
    <Wrapper>
      <Text>© 2024 Trinh The Son. All rights reserved.</Text>
      <Text>Enjoy the rest of your {DAYS[new Date().getDay()]}!</Text>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: var(--height-header);

    border-top: 1px solid var(--color-border);

    font-size: 14px;
    
    color: var(--color-secondary-text);
  }
`;

const Text = styled.p`
  text-align: center;
`;

export default Footer;
