"use client";

import React from "react";
import styled from "styled-components";

import DesktopNavLeft from "./DesktopNavLeft";
import DesktopNavRight from "./DesktopNavRight";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import ToggleMenu from "./ToggleMenu";

import { QUERIES } from "@/constants";
import ToggleSearch from "./ToggleSearch";

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
        <ToggleSearch
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <DesktopNavLeft />
        <Logo handleClose={handleClose} />
        <ToggleMenu
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <DesktopNavRight />
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
  z-index: 1;

  position: sticky;
  top: var(--height-banner);

  width: 100%;
  height: var(--height-header);

  background-color: var(--color-background);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-inline: var(--space);

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

export default Header;
