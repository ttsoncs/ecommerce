import Link from "next/link";
import Image from "next/image";

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
      fill: {
        duration: 1,
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
          "--width": `${(size * 4) / 3}px`,
          "--height": `${size}px`,
        }}
      >
        <SVG />
      </SVGWrapper>
      Soncs
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
        d="M 8 13 L 1 1 L 15 1 z"
        variants={variant}
        initial="hidden"
        animate="visible"
        stroke="white"
        strokeWidth="0.5"
        transition={{
          duration: 1.5,
          ease: [0.32, 0.72, 0, 1],
        }}
      ></motion.path>
    </svg>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: baseline;

  font-size: 24px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-primary-text);
  text-decoration: none;
`;

const SVGWrapper = styled.div`
  align-self: baseline;

  width: var(--width);
  height: var(--height);
`;

export default Logo;
