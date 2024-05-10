import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import MobileLinks from "./MobileLinks";
import { QUERIES } from "@/constants";

const variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    opacity: 0,
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
        "--modal-position": isModalOpen ? "0" : "revert",
        "--top": "var(--modal-position)",
        "--bottom": "var(--modal-position)",
        "--right": isModalOpen ? "0" : "var(--padding-space-header)",
        "--width": isModalOpen ? "revert" : "32px",
        "--height": isModalOpen ? "revert" : "32px",
        "--padding-top": isModalOpen ? "var(--height-header)" : "0",
      }}
      layout={true}
    >
      {/* <MobileLinks handleClose={handleClose}></MobileLinks> */}
      {/* {isModalOpen && ()} */}
    </Modal>
  );
}

const Modal = styled(motion.nav)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;

    position: fixed;
    top: var(--top);
    bottom: var(--bottom);
    right: var(--right);

    width: var(--width);
    height: var(--height);

    padding-top: var(--padding-top);
    background-color: var(--color-background-nav);
    aspect-ratio: 1/1;
  }
`;

export default MobileNav;
