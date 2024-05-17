import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import MobileLinks from "./MobileLinks";
import { QUERIES } from "@/constants";

const variants = {
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.35,
      },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.35,
      },
    },
  },
};

const visible = {
  inset: 0,
};

const hidden = {
  width: "var(--size-toggle)",
  height: "var(--size-toggle)",
  right: "var(--space-header)",
};

function MobileNav({ isModalOpen, handleClose }) {
  return (
    <Modal
      variants={variants}
      initial={"hidden"}
      animate={isModalOpen ? "visible" : "hidden"}
      transition={{
        layout: {
          ease: [0.32, 0.72, 0, 1],
          duration: 0.7,
        },
      }}
      onClick={handleClose}
      style={isModalOpen ? visible : hidden}
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

    background-color: var(--color-background-nav);
  }
`;

export default MobileNav;
