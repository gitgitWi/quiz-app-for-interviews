import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

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
