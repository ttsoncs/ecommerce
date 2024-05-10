import React from "react";
import styled from "styled-components";

import { QUERIES } from "@/constants";

function Toggle({ isModalOpen, handelToggle }) {
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
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;

    width: 32px;
    height: 32px;
  }
`;

const Bar = styled.div`
  position: absolute;

  background: var(--color-primary-text);
  width: 14px;
  height: 1.5px;

  transition: transform 0.25s cubic-bezier(0.32, 0.72, 0, 1) 50ms;
`;

const TopBar = styled(Bar)`
  transform: var(--transform-toggle);
`;

const BottomBar = styled(Bar)`
  transform: var(--transform-toggle);
`;

export default Toggle;
