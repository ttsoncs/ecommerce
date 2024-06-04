"use client";

import React from "react";
import styled from "styled-components";

import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";

import { QUERIES } from "@/constants";

function Footer() {
  return (
    <>
      <Wrapper>
        <LegalLinksWrapper>
          <Copyright>&#169; {new Date().getFullYear()} côlafruits</Copyright>
          <LegalLinks />
        </LegalLinksWrapper>
        <SocialLinksWrapper>
          <SocialLinks />
        </SocialLinksWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px 64px;

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
`;

const LegalLinksWrapper = styled(LinkWrapper)`
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    span {
      display: none;
    }
  }
`;

const Copyright = styled.p`
  color: var(--color-gray-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);
`;

const SocialLinksWrapper = styled(LinkWrapper)``;

export default Footer;
