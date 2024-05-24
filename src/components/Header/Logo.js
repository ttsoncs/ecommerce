import Link from "next/link";
import Image from "next/image";

import React from "react";
import styled from "styled-components";

function Logo({ handleClose }) {
  return (
    <StyledLink
      href="/"
      onClick={handleClose}
    >
      mishmash&#174;
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 8px;

  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-black-text);
  text-decoration: none;
`;

export default Logo;
