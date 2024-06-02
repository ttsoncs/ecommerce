import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";

import StyledComponentsRegistry from "@/lib/registry";

import Background from "@/components/Background";
import GlobalStyles from "@/components/GlobalStyles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Divider from "@/components/Divider";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";

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
      path: "../../public/fonts/wotfard-bold-webfont.woff2",
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
          <Banner />
          <MaxWidthWrapper>
            <Header />
            <Spacer
              size={`calc(24px + var(--height-banner))`}
              hasUnit={true}
            />
            {children}
            <Divider size={32} />
            <Footer />
            <Spacer size={32} />
          </MaxWidthWrapper>
          <Analytics />
          <SpeedInsights />
          <GlobalStyles />
        </Background>
      </StyledComponentsRegistry>
    </html>
  );
}
