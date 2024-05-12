import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import MobileLinks from "./MobileLinks";
import { QUERIES } from "@/constants";

const variants = {
  open: {
    opacity: 1,
    top: "var(--top)",
    right: "var(--right)",
    width: "var(--width)",
    height: "var(--height)",
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    opacity: 0,
    top: "var(--top)",
    right: "var(--right)",
    width: "var(--width)",
    height: "var(--height)",
    transition: {
      duration: 0.25,
    },
  },
};

function MobileNav({ isModalOpen, handleClose }) {
  return (
    <Modal
      animate={isModalOpen ? "open" : "closed"}
      initial={"closed"}
      transition={{
        ease: [0.32, 0.72, 0, 1],
        duration: 0.5,
      }}
      variants={variants}
      onClick={handleClose}
      style={{
        "--top": isModalOpen
          ? "0"
          : "calc((var(--height-header) - var(--size-toggle)) / 2)",
        "--right": isModalOpen ? "0" : "var(--space-header)",
        "--width": isModalOpen ? "100%" : "var(--size-toggle)",
        "--height": isModalOpen ? "100%" : "var(--size-toggle)",
      }}
      layout={true}
    >
      {isModalOpen && (
        <MobileLinks
          handleClose={handleClose}
        ></MobileLinks>
      )}
    </Modal>
  );
}

const Modal = styled(motion.nav)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;

    position: fixed;

    background-color: var(--color-background-nav);
  }
`;

export default MobileNav;
