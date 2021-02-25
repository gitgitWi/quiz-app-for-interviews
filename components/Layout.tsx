import styled from "@emotion/styled";
import {
  gradient,
  secondaryRed,
  transparent6Background,
  primaryGreen,
  secondaryGreen,
} from "../shared/styles";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "./types";

const StyledBodyWrapper = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    45deg,
    ${primaryGreen},
    ${secondaryRed},
    ${secondaryGreen}
  );
  background-size: 300% 300%;
  animation: ${gradient} 5s ease-in-out infinite;
`;

const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: calc(100vh - 130px);
  padding: 20px;
  background-color: ${transparent6Background};
  font-weight: 400;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <StyledBodyWrapper>
      <Header />
      <StyledMainWrapper>{children}</StyledMainWrapper>
      <Footer />
    </StyledBodyWrapper>
  );
}
