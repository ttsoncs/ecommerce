"use client";

import Link from "next/link";

import React from "react";
import styled from "styled-components";

import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";

import { QUERIES } from "@/constants";

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <LegalsLinkWrapper>
          <Logo>&#169; {new Date().getFullYear()} côlafruits</Logo>
          <LegalLinks />
        </LegalsLinkWrapper>
        <SocialsLinkWrapper>
          <SocialLinks />
        </SocialsLinkWrapper>
      </FooterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space-phone);
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const LegalsLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    span:not(:first-of-type) {
      display: none;
    }
  }
`;

const Logo = styled.span`
  color: var(--color-gray-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);
`;

const SocialsLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Footer;
