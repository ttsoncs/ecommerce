import Link from "next/link";

import React from "react";
import styled from "styled-components";

import Separator from "@/components/Separator";

import { LEGAL_LINKS } from "@/constants";

function LegalLinks() {
  return (
    <>
      {LEGAL_LINKS.map(({ title, href }) => {
        return (
          <React.Fragment key={title}>
            <Separator gap={16}>·</Separator>
            <StyledLink href={href}>{title}</StyledLink>
          </React.Fragment>
        );
      })}
    </>
  );
}

const StyledLink = styled(Link)`
  position: relative;

  display: flex;

  color: var(--color-black-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);

  text-decoration: none;

  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }

  &::after {
    --tap-increment: -8px;
    content: "";
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }
`;

export default LegalLinks;
