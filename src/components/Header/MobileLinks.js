import { usePathname } from "next/navigation";
import Link from "next/link";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { NAV_LINKS } from "@/constants";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

const variants = {
  visible: {
    opacity: [0, 1, 1],
    y: 96,
    filter: "blur(0px)",

    transition: {
      opacity: {
        duration: 0.5,
      },
      filter: {
        duration: 0.5,
      },
      y: {
        type: "spring",
        stiffness: 140,
        damping: 20,
      },
    },
  },
  hidden: {
    opacity: 0,
    y: 0,
    filter: "blur(5px)",
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
