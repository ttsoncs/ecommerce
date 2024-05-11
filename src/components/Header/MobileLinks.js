import { usePathname } from "next/navigation";
import Link from "next/link";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { NAV_LINKS } from "@/constants";

function MobileLinks({ isModalOpen, handleClose }) {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map(({ title, href }, index) => (
        <MotionLinkWrapper
          initial={{
            opacity: 0,
            marginTop: index === 0 && "0px",
          }}
          animate={{
            opacity: [0, 1, 1],
            marginTop: index === 0 && "var(--height-header)",
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.5, 1],
            marginTop: {
              ease: [0.32, 0.72, 0, 1],
            },
          }}
          href={href}
          key={index}
          onClick={handleClose}
          style={{
            "--color-active":
              pathname === href
                ? "var(--color-primary-text)"
                : "var(--color-secondary-text)",
          }}
          layout="position"
        >
          {title}
        </MotionLinkWrapper>
      ))}
    </>
  );
}

const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  padding: 12px;
  padding-left: var(--padding-space-header);

  color: var(--color-active);
  max-width: 75%;

  text-decoration: none;
  text-transform: capitalize;
`;

const MotionLinkWrapper = motion(StyledLink);

export default MobileLinks;
