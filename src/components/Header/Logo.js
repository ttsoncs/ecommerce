import Link from "next/link";

import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Logo({ handleClose }) {
  return (
    <StyledLink
      href="/"
      onClick={handleClose}
    >
      côlafruits
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  position: relative;

  display: flex;
  flex: 0;
  z-index: 1;

  font-size: 28px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-black-text);
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

  @media ${QUERIES.phoneAndSmaller} {
    z-index: 0;

    font-size: 24px;
  }
`;

export default Logo;
