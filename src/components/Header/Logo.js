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
  align-items: baseline;

  font-size: 28px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-black-text);
  text-decoration: none;

  transition: color 200ms ease;

  &:hover {
    color: var(--color-hover);
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 24px;
  }
`;

export default Logo;
