export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  gray: {
    100: "hsl(0deg 0% 94%)",
    500: "hsl(0deg 0% 54%)",
    600: "hsl(0deg 0% 44%)",
    700: "hsl(0deg 0% 34%)",
    800: "hsl(0deg 0% 24%)",
    900: "hsl(0deg 0% 14%)",
    1000: "hsl(0deg 0% 4%)",
  },
  black: "hsl(0deg 0% 0%)",
  green: "hsl(163deg 44% 68%)",
  orange: "hsl(24deg 100% 50%)",
  blue: "hsl(186deg 48% 61%)",
  purple: "hsl(271deg 26% 63%)",
  pink: "hsl(341deg 70% 92%)",
};

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const BREAKPOINTS = {
  phoneMax: 640,
  tabletMax: 1024,
  laptopMax: 1536,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};
