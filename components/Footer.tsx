import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryRed } from "../shared/styles";

const StyledFooter = styled.footer`
  height: 50px;
  padding: 5px;
`;

const StyledFooterCopyrights = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: ${primaryRed};
  a {
    color: ${primaryRed};
    margin-left: 3px;
    text-decoration: none;
  }
  :focus {
    outline-style: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterCopyrights>
        Copyrights by{" "}
        <a
          href="https://github.com/gitgitWi/quiz-app-for-interviews"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> gitgitWi
        </a>
      </StyledFooterCopyrights>
    </StyledFooter>
  );
}
