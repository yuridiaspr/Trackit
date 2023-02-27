import styled from "styled-components";
import { Link } from "react-router-dom";
import { SecundaryColor, BackgroundWhite } from "../constants/colors";
import User from "../assets/images/User.jpg";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Upside() {
  const { user } = useContext(UserContext);
  console.log("user.image", user.image);
  return (
    <Container>
      <Header>
        <StyledLink to="/hoje">Trackit</StyledLink>
        {user.image === undefined ? (
          <img src={User} />
        ) : (
          <img src={user.image} />
        )}
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${BackgroundWhite};
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
