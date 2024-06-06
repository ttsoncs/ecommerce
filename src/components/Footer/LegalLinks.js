import Link from "next/link";

import React from "react";
import styled from "styled-components";

import Separator from "@/components/Separator";

function LegalLinks({ links }) {
  const size = links.length * 2;

  return (
    <>
      {Array(size)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <Separator gap={16}>·</Separator>
            ) : (
              <StyledLink href={links[Math.floor(index / 2)].href}>
                {links[Math.floor(index / 2)].title}
              </StyledLink>
            )}
          </React.Fragment>
        ))}
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
