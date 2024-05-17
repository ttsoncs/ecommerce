import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import MobileLinks from "./MobileLinks";
import { QUERIES } from "@/constants";

const variants = {
  open: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.25,
      },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.3,
      },
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
        "--left": "var(--modal-position)",
        "--right": isModalOpen ? "0" : "var(--space-header)",
        "--width": isModalOpen ? "revert" : "var(--size-toggle)",
        "--height": isModalOpen ? "revert" : "var(--size-toggle)",
      }}
      layout={true}
    >
      {/* {isModalOpen && <MobileLinks handleClose={handleClose}></MobileLinks>} */}
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
    left: var(--left);
    right: var(--right);

    width: var(--width);
    height: var(--height);

    background-color: var(--color-background-nav);
  }
`;

export default MobileNav;
