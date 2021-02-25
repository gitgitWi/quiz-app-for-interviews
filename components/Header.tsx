import Link from "next/link";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  primaryRed,
  transparent3Background,
  primaryBrown,
} from "../shared/styles";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
  min-width: 360px;
  overflow-x: auto;
  height: 80px;
  background-color: ${transparent3Background};
`;

const StyledHeaderIcons = styled(FontAwesomeIcon)`
  width: 30px;
  cursor: pointer;
  color: ${primaryRed};
`;

const StyledHeaderTitle = styled.h1`
  width: 100%;
  max-width: 900px;
  text-align: center;
  font-family: Lato, sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 28px;
  color: ${primaryBrown};
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderIcons icon={faChevronLeft} />
      <StyledHeaderTitle>Quiz App for Interview</StyledHeaderTitle>
      <Link href="/">
        <StyledHeaderIcons icon={faHome} />
      </Link>
    </StyledHeader>
  );
}
