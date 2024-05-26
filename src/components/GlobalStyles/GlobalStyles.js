"use client";

import { COLORS, FONT_WEIGHTS } from "@/constants";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  #root, #__next {
    isolation: isolate;
  }
  
  html, body { 
    height: 100%;
    font-size: 16px;
  }

  html {
    --color-black-text: ${COLORS.black};
    --color-white-text: ${COLORS.white};
    --color-gray-text: ${COLORS.gray[500]};
    --color-separator: ${COLORS.gray[700]};
    --color-background: ${COLORS.white};
    --color-banner: ${COLORS.green};
    --color-modal: ${COLORS.gray[100]};
    --color-quantity: ${COLORS.green};

    --color-background-badge: ${COLORS.white};
    --color-border: ${COLORS.gray[900]};
    --color-secondary: ${COLORS.orange};

    --font-weight-normal: ${FONT_WEIGHTS.regular};
    --font-weight-medium: ${FONT_WEIGHTS.medium};
    --font-weight-semibold: ${FONT_WEIGHTS.semibold};
    --font-weight-bold: ${FONT_WEIGHTS.bold};

    --space: 16px;
    --space-card: 28px;
    
    --size-toggle: 32px;

    --height-header: 72px;
    --height-banner: 32px;
  }
`;

export default GlobalStyles;
