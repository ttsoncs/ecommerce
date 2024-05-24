import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import styled from "styled-components";

import { NAV_LINKS } from "@/constants";

function DesktopLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map(({ title, href }, index) => (
        <StyledLink
          href={href}
          key={index}
          style={{
            "--color-active":
              pathname === href
                ? "var(--color-black-text)"
                : "var(--color-gray-text)",
          }}
        >
          {title}
        </StyledLink>
      ))}
    </>
  );
}

const StyledLink = styled(Link)`
  color: var(--color-active);

  font-size: 17px;
  font-weight: var(--font-weight-semibold);

  text-decoration: none;
  text-transform: capitalize;

  transition: color 200ms ease;

  &:hover {
    color: var(--color-black-text);
  }
`;

export default DesktopLinks;
