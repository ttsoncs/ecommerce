import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function ToggleMenu({ isModalOpen, handelToggle }) {
  return (
    <Wrapper
      type="button"
      onClick={handelToggle}
    >
      <TopBar
        style={{
          "--transform-toggle": isModalOpen
            ? "translateY(0) rotate(45deg) scaleX(1.1)"
            : "translateY(-3.5px)",
        }}
      />
      <BottomBar
        style={{
          "--transform-toggle": isModalOpen
            ? "translateY(0) rotate(-45deg) scaleX(1.1)"
            : "translateY(3.5px)",
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;

    width: var(--size-toggle);
    height: var(--size-toggle);

    &::after {
      --tap-increment: -8px;
      content: "";
      position: absolute;
      top: var(--tap-increment);
      left: var(--tap-increment);
      right: var(--tap-increment);
      bottom: var(--tap-increment);
    }
  }
`;

const Bar = styled.div`
  position: absolute;

  background: var(--color-black-text);
  width: 14px;
  height: 2px;

  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
`;

const TopBar = styled(Bar)`
  transform: var(--transform-toggle);
`;

const BottomBar = styled(Bar)`
  transform: var(--transform-toggle);
`;

export default ToggleMenu;
