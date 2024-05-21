export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  gray: {
    500: "hsl(0deg 0% 58%)",
    900: "hsl(0deg 0% 14%)",
    1000: "hsl(0deg 0% 4%)",
  },
  black: "hsl(0deg 0% 0%)",
  green: "hsl(145deg 95% 40%)",
  orange: "hsl(24deg 100% 50%)",
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
  laptopMax: 1280,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};

export const NAV_LINKS = [
  { title: "about", href: "/" },
  { title: "blog", href: "/blog" },
  { title: "lab", href: "/lab" },
  { title: "contact", href: "/contact" },
];

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
