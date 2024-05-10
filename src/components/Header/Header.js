"use client";

import React from "react";
import styled from "styled-components";

import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Toggle from "./Toggle";

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
        <Logo
          handleClose={handleClose}
          size={24}
        />
        <Toggle
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <DesktopNav />
        <MobileNav
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

  position: sticky;
  top: 0;

  width: 100%;
  height: var(--height-header);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;
  padding-inline: var(--padding-space-header);

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

export default Header;
