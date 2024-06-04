"use client";

import React from "react";
import styled from "styled-components";

function Spacer({ size = 0 }) {
  return (
    <Space
      style={{
        "--size": `${size}px`,
      }}
    />
  );
}

const Space = styled.div`
  height: var(--size);
`;

export default Spacer;
