"use client";

import React from "react";
import styled from "styled-components";

function Spacer({ size = 0 }) {
  return (
    <Wrapper
      style={{
        "--size": `${size}px`,
      }}
    />
  );
}

const Wrapper = styled.aside`
  height: var(--size);
`;

export default Spacer;
