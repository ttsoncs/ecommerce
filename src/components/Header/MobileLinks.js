import { usePathname } from "next/navigation";
import Link from "next/link";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { NAV_LINKS } from "@/constants";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

const variants = {
  visible: {
    opacity: 1,
    y: 64,
    filter: "blur(0px)",

    transition: {
      opacity: {
        duration: 0.4,
      },
      filter: {
        duration: 0.4,
      },
      y: {
        duration: 0.4,
      },
    },
  },
  hidden: {
    opacity: 0,
    y: 96,
    filter: "blur(5px)",

    transition: {
      opacity: {
        duration: 0.4,
      },
      filter: {
        duration: 0.4,
      },
      y: {
        duration: 0.4,
      },
    },
  },
};

function MobileLinks({ handleClose }) {
  const pathname = usePathname();
  useLockBodyScroll();

  return (
    <>
      {NAV_LINKS.map(({ title, href }, index) => (
        <MotionLinkWrapper
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          layout="position"
          href={href}
          key={index}
          onClick={handleClose}
          style={{
            "--color-active":
              pathname === href
                ? "var(--color-primary-text)"
                : "var(--color-secondary-text)",
          }}
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
