import styled from "styled-components";
import { SecundaryColor, BackgroundWhite } from "../constants/colors";
import Logo from "../assets/images/logo.png";

export default function Upside() {
  return (
    <Container>
      <Header>
        <p>Trackit</p>
        <img src={Logo} />
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
  background-color: ${SecundaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  color: ${BackgroundWhite};
  font-family: "Playball", cursive;
  font-size: 34px;
  z-index: 1;
  img {
    border-radius: 98.5px;
    width: 51px;
    height: 51px;
  }
`;
