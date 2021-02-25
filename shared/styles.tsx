import { Global, css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// TODO: 반응형 웹 미디어 쿼리
const breakpoints = [576, 768, 992, 1200];

const medias = breakpoints.map((width) => `@media (max-width: ${width}px)`);

export const responsiveWidth = `
`;

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Lato, sans-serif;
        font-size: 24px;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

export const primaryRed = `#a44a3f` as const;
export const secondaryRed = `#c7ac92` as const;
export const primaryBrown = `#49221d` as const;
export const primaryGreen = `#9cb380` as const;
export const secondaryGreen = `#94a89a` as const;
export const transparent6Background = `rgba(255, 255, 255, 0.6)` as const;
export const transparent3Background = `rgba(255, 255, 255, 0.3)` as const;
