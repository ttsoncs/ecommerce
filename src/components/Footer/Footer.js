"use client";

import React from "react";
import styled from "styled-components";

import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";

import { QUERIES } from "@/constants";

function Footer() {
  return (
    <Wrapper>
      <LegalLinksWrapper>
        <Logo>&#169; {new Date().getFullYear()} côlafruits</Logo>
        <LegalLinks />
      </LegalLinksWrapper>
      <SocialLinksWrapper>
        <SocialLinks />
      </SocialLinksWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px 64px;

  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: flex-start;

    margin-inline: var(--space-phone);
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinksWrapper = styled(LinkWrapper)``;

const LegalLinksWrapper = styled(LinkWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    span {
      display: none;
    }
  }
`;

const Logo = styled.p`
  color: var(--color-gray-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);
`;

export default Footer;
