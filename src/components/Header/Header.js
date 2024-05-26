"use client";

import React from "react";
import styled from "styled-components";

import DesktopNavLeft from "./DesktopNavLeft";
import DesktopNavRight from "./DesktopNavRight";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import MobileNavLeft from "./MobileNavLeft";
import MobileNavRight from "./MobileNavRight";

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
        <MobileNavLeft
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <DesktopNavLeft />
        <Logo handleClose={handleClose} />
        <DesktopNavRight
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
        <MobileNavRight
          isModalOpen={isModalOpen}
          handelToggle={handelToggle}
        />
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

  width: 100%;
  margin-inline: var(--space);
`;

export default Header;
