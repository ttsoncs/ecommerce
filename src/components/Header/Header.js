"use client";

import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Modal from "./Modal";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

import { QUERIES } from "@/constants";

function Header() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function handelToggle() {
    setIsModalOpen(!isModalOpen);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <NavLeft
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <Logo handleClose={handleClose} />
        <NavRight
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <Modal
          isModalOpen={isModalOpen}
          handleClose={handleClose}
        />
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.header`
  display: flex;
  align-items: center;
  z-index: 1;

  position: sticky;
  top: var(--height-banner);

  width: 100%;
  height: var(--height-header);

  box-shadow: 0 5px 15px 10px white;
  background-color: var(--color-background);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin-inline: var(--space-laptop);

  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: var(--space-phone);
  }
`;

export default Header;
