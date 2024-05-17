"use client";

import { COLORS, FONT_WEIGHTS, FONT_SIZES } from "@/constants";
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
    --color-primary-text: ${COLORS.white};
    --color-secondary-text: ${COLORS.gray[500]};
    --color-background: ${COLORS.black};
    --color-background-nav: ${COLORS.gray[1000]};
    --color-background-card: ${COLORS.gray[1000]};
    --color-border: ${COLORS.gray[900]};
    --color-primary: ${COLORS.green};


    --font-weight-normal: ${FONT_WEIGHTS.regular};
    --font-weight-medium: ${FONT_WEIGHTS.medium};
    --font-weight-semibold: ${FONT_WEIGHTS.semibold};
    --font-weight-bold: ${FONT_WEIGHTS.bold};

    --space-header: 28px;
    --space: 16px;
    
    --size-toggle: 32px;

    --height-header: 64px;
  }
`;

export default GlobalStyles;
