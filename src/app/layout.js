import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";

import StyledComponentsRegistry from "@/lib/registry";

import AppBackground from "@/components/Background";
import GlobalStyles from "@/components/GlobalStyles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Separator from "@/components/Separator";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";

export const metadata = {
  title: `côlafruits - Fruits store`,
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
      path: "../../public/fonts/BMDANIEL-Bold.woff2",
      weight: "600",
      style: "normal",
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
          <Banner>
            <span>Subscribe and save 20%</span>
            <Separator />
            <span>Free shipping in 🇻🇳 Vietnam over 500.000đ</span>
            <Separator />
            <span>Save more on quantity 6+ refills 10% off</span>
          </Banner>
          <MaxWidthWrapper>
            <Header />
            <Hero />
            <Quote />
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
