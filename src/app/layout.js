import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import React from "react";

import localFont from "next/font/local";

import StyledComponentsRegistry from "@/lib/registry";

import Background from "@/components/Background";
import GlobalStyles from "@/components/GlobalStyles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Separator from "@/components/Separator";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Divider from "@/components/Divider";
import Spacer from "@/components/Spacer";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

import { BANNER_MESSAGES } from "@/constants";

export const metadata = {
  title: `côlafruits® - Fruits store`,
  description: "Fresh, Seasonal Fruits Delivered to Your Door!",
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
      path: "../../public/fonts/BMDANIEL-Bold.woff2",
      weight: "700",
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
        <Background>
          <Banner>
            <BannerContent content={BANNER_MESSAGES} />
          </Banner>
          <MaxWidthWrapper>
            <Header />
            <Spacer
              size={`calc(24px + var(--height-banner))`}
              hasUnit={true}
            />
            <Hero />
            <Spacer size={80} />
            <Quote />
            <Divider size={64} />
            <Testimonial />
            <Spacer size={128} />
            <Divider size={32} />
            <Footer />
            <Spacer size={32} />
          </MaxWidthWrapper>
          {children}
          <Analytics />
          <SpeedInsights />
          <GlobalStyles />
        </Background>
      </StyledComponentsRegistry>
    </html>
  );
}

function BannerContent({ content }) {
  const num_elements = content.length * 2 - 1;

  return (
    <>
      {Array(num_elements)
        .fill(null)
        .map((_, index) => (
          <>
            {index % 2 === 0 ? (
              content[index / 2]
            ) : (
              <Separator gap={8}>|</Separator>
            )}
          </>
        ))}
    </>
  );
}
