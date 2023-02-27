import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MainColor,
  BackgroundWhite,
  RegistrationBorderColor,
  RegistrationTextColor,
} from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
`;

export const MainLogo = styled.img`
  height: 178.38323974609375px;
  width: 180px;
  border-radius: 0px;
`;

export const StyledForm = styled.div`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
`;

export const Register = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;

  color: ${MainColor};

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 25px;
  height: 45px;
  width: 100%;
  border-radius: 4.636363506317139px;
  background-color: ${MainColor};
  border: none;

  color: ${BackgroundWhite};
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;

  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 6px;

  box-sizing: border-box;
  width: 303px;
  height: 45px;

  background: ${BackgroundWhite};
  border: 1px solid ${RegistrationBorderColor};
  border-radius: 5px;

  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};

  ::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${RegistrationTextColor};
  }
`;
