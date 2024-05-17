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
      {/* <ImageWrapper
        style={{
          "--width": `${(size * 16) / 15}px`,
          "--height": `${size}px`,
        }}
      >
        <Image
          src="/images/logo.svg"
          fill={true}
          alt="About page"
          priority={true}
        />
      </ImageWrapper> */}
      Soncs
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 4px;

  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  align-self: center;

  width: var(--width);
  height: var(--height);
`;

export default Logo;
