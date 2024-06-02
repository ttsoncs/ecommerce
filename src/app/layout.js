import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
            <span>Subscribe and save 20%</span>
            <Separator gap={8}>|</Separator>
            <span>Free shipping in 🇻🇳 Vietnam over 500.000đ</span>
            <Separator gap={8}>|</Separator>
            <span>Save more on quantity 6+ refills 10% off</span>
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
