import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";

import StyledComponentsRegistry from "@/lib/registry";

import AppBackground from "@/components/Background";
import GlobalStyles from "@/components/GlobalStyles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Trinh The Son",
  description: "Generated by create next app",
};

const wotfard = localFont({
  src: [
    {
      path: "../../public/fonts/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/wotfard-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/wotfard-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/wotfard-semibolditalic-webfont.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  display: "fallback",
  preload: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={wotfard.className}
    >
      <head>
        <link
          href="/images/favicon.png"
          rel="icon"
          type="image/png"
        />
      </head>
      <StyledComponentsRegistry>
        <AppBackground>
          <MaxWidthWrapper>
            <Header />
            <Hero />
            {children}
          </MaxWidthWrapper>
          <Analytics />
          <SpeedInsights />
          <GlobalStyles />
        </AppBackground>
      </StyledComponentsRegistry>
    </html>
  );
}
