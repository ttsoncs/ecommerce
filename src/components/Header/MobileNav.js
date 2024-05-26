import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import MobileLinks from "./MobileLinks";
import { QUERIES } from "@/constants";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

const variants = {
  visible: {
    y: 0,

    transition: {
      y: {
        ease: [0.32, 0.72, 0, 1],
        duration: 0.5,
      },
    },
  },
  hidden: {
    y: "-100%",

    transition: {
      y: {
        ease: [0.32, 0.72, 0, 1],
        duration: 0.5,
      },
    },
  },
};

function MobileNav({ isModalOpen, handleClose }) {
  useLockBodyScroll();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            layout: {
              ease: [0.32, 0.72, 0, 1],
              duration: 0.5,
            },
          }}
          onClick={handleClose}
        >
          {/* {isModalOpen && <MobileLinks handleClose={handleClose}></MobileLinks>} */}
        </Modal>
      )}
    </AnimatePresence>
  );
}

const Modal = styled(motion.nav)`
  display: flex;
  flex-direction: column;

  position: fixed;
  inset: 0;

  background-color: var(--color-modal);
`;

export default MobileNav;
