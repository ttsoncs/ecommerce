import Link from "next/link";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variant = {
  hidden: {
    pathLength: 0,
    fill: "hsl(0deg 0% 0%)",
  },
  visible: {
    pathLength: 1,
    fill: "hsl(0deg 0% 100%)",
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: [0.32, 0.72, 0, 1],
      fill: {
        delay: 0.5,
        duration: 0.5,
        ease: "linear",
      },
    },
  },
};

function Logo({ handleClose, size }) {
  return (
    <StyledLink
      href="/"
      onClick={handleClose}
    >
      <SVGWrapper
        style={{
          "--width": `${(size * 16) / 14}px`,
          "--height": `${size}px`,
        }}
      >
        <SVG />
      </SVGWrapper>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.75,
          duration: 0.25,
        }}
      >
        Soncs
      </motion.p>
    </StyledLink>
  );
}

function SVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
    >
      <motion.path
        d="M 8 13 L 1 1 L 15 1 L 8 13 L 1 1"
        variants={variant}
        initial="hidden"
        animate="visible"
        stroke="white"
        strokeWidth="0.75"
      ></motion.path>
    </svg>
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

const SVGWrapper = styled.div`
  align-self: center;

  width: var(--width);
  height: var(--height);
`;

export default Logo;
