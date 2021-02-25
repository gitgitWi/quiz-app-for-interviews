import Link from "next/link";
import styled from "@emotion/styled";

const StyledBodyWrapper = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 32px;
`;

export default function IndexPage() {
  return (
    <StyledBodyWrapper>
      <StyledHeader>Quiz App for Interview</StyledHeader>
    </StyledBodyWrapper>
  );
}
