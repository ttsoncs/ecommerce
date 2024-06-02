import Link from "next/link";
import Image from "next/image";

import React from "react";
import styled from "styled-components";

import Separator from "@/components/Separator";

import { SOCIAL_LINKS } from "@/constants";

function SocialLinks() {
  return (
    <>
      {SOCIAL_LINKS.map(({ title, href }, index) => {
        return (
          <React.Fragment key={title}>
            {index != 0 && <Separator gap={16}>·</Separator>}
            <StyledLink href={href}>
              {title}
              <ImageWrapper
                style={{
                  "--width": `20px`,
                  "--height": `20px`,
                }}
              >
                <Image
                  src="/images/arrow-up-right.svg"
                  fill={true}
                  alt="Arrow"
                />
              </ImageWrapper>
            </StyledLink>
          </React.Fragment>
        );
      })}
    </>
  );
}

const StyledLink = styled(Link)`
  position: relative;

  display: flex;

  color: var(--color-black-text);

  font-size: 17px;
  font-weight: var(--font-weight-medium);

  text-decoration: none;

  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }

  &::after {
    --tap-increment: -8px;
    content: "";
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  width: var(--width);
  height: var(--height);
`;

export default SocialLinks;
