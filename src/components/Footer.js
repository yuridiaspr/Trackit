import styled from "styled-components";
import { MainColor, BackgroundWhite } from "../constants/colors";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

export default function Footer() {
  const { progress } = useContext(ProgressContext);

  return (
    <Container>
      <Header>
        <StyledLink to="/habitos">Hábitos</StyledLink>

        <ContentProgressbar>
          <CircularProgressbarContainer>
            <Link to="/hoje">
              <CircularProgressbar
                value={progress}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}
              />
            </Link>
          </CircularProgressbarContainer>
        </ContentProgressbar>

        <StyledLink to="/historico">Histórico</StyledLink>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${BackgroundWhite};
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  color: ${MainColor};
  font-family: "Lexend Deca", sans-serif;
  font-size: 17.976px;
  line-height: 22px;
  z-index: 1;
  img {
    border-radius: 98.5px;
    width: 51px;
    height: 51px;
  }
`;

const Today = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${MainColor};
  margin-bottom: 50px;
  width: 91px;
  height: 91px;
  color: ${BackgroundWhite};
  border-radius: 50px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const ContentProgressbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CircularProgressbarContainer = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: -30px;
`;

const StyledLink = styled(Link)`
  color: ${MainColor};
  text-decoration: none;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
