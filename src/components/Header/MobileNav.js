import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import MobileLinks from "./MobileLinks";
import { QUERIES } from "@/constants";

const variants = {
  visible: {
    opacity: 1,

    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
  hidden: {
    opacity: 0,

    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
};

function MobileNav({ isModalOpen, handleClose }) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <MobileLinks handleClose={handleClose}></MobileLinks>
        </Modal>
      )}
    </AnimatePresence>
  );
}

const Modal = styled(motion.nav)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;

    position: fixed;
    inset: 0;

    background-color: var(--color-background-nav);
  }
`;

export default MobileNav;
