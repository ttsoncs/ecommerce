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
      côlafruits&#174;
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
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

  @media ${QUERIES.phoneAndSmaller} {
    z-index: 0;

    font-size: 24px;
  }
`;

export default Logo;
