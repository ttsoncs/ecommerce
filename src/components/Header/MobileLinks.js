import { usePathname } from "next/navigation";
import Link from "next/link";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { NAV_LINKS } from "@/constants";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

function MobileLinks({ handleClose }) {
  const pathname = usePathname();

  useLockBodyScroll();

  return (
    <>
      {NAV_LINKS.map(({ title, href }, index) => (
        <MotionLinkWrapper
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 1],
            y: 64,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.5, 1],
            y: {
              type: "spring",
              stiffness: 140,
              damping: 20,
            },
            filter: {
              duration: 0.5,
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
  padding-left: var(--space-header);

  color: var(--color-active);
  max-width: 75%;

  text-decoration: none;
  text-transform: capitalize;
`;

const MotionLinkWrapper = motion(StyledLink);

export default MobileLinks;
