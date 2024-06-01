"use client";

import Link from "next/link";

import React from "react";
import styled from "styled-components";

import Separator from "@/components/Separator";

import { QUERIES, LEGAL_LINKS, SOCIAL_LINKS } from "@/constants";

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <LegalsLinkWrapper>
          <Logo>&#169; {new Date().getFullYear()} côlafruits</Logo>
          {LEGAL_LINKS.map(({ title, href }) => {
            return (
              <React.Fragment key={title}>
                <Separator gap={16}>·</Separator>
                <StyledLink href={href}>{title}</StyledLink>
              </React.Fragment>
            );
          })}
        </LegalsLinkWrapper>
        <SocialsLinkWrapper>
          {SOCIAL_LINKS.map(({ title, href }, index) => {
            return (
              <React.Fragment key={title}>
                {index != 0 && <Separator gap={16}>·</Separator>}
                <StyledLink href={href}>{title}</StyledLink>
              </React.Fragment>
            );
          })}
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

const LegalsLinkWrapper = styled.p`
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

const StyledLink = styled(Link)`
  color: var(--color-black-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);

  text-decoration: none;
`;

const SocialsLinkWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Footer;
