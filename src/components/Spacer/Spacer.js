"use client";

import React from "react";
import styled from "styled-components";

function Spacer({ size = 0, hasUnit = false }) {
  const finalSize = hasUnit ? size : `${size}px`;

  return (
    <Space
      style={{
        "--size": finalSize,
      }}
    />
  );
}

const Space = styled.div`
  height: var(--size);
`;

export default Spacer;
