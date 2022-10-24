import styled from "styled-components";
import { MainColor, BackgroundWhite } from "../constants/colors";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <p onClick={() => navigate("/habitos")}>Hábitos</p>
        <Today onClick={() => navigate("/hoje")}>
          <p>Hoje</p>
        </Today>
        <p onClick={() => navigate("/historico")}>Histórico</p>
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

const Today = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${MainColor};
  margin-bottom: 50px;
  width: 91px;
  height: 91px;
  color: ${BackgroundWhite};
  border-radius: 50px;
`;
