import Link from "next/link";
import Image from "next/image";

import React from "react";
import styled from "styled-components";

function Logo({ handleClose, size }) {
  return (
    <StyledLink
      href="/"
      onClick={handleClose}
    >
      <StyledImage
        src="/images/logo.svg"
        width={size + 8}
        height={size}
        alt="About page"
      ></StyledImage>
      Soncs
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 2px;

  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);
  text-decoration: none;

`;

const StyledImage = styled(Image)`
  align-self: center;
`;

export default Logo;
