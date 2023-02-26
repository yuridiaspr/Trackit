import {
  Container,
  MainLogo,
  Form,
  Register,
  StyledButton,
} from "./InitialPageStyled";
import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { URL_Register } from "../../constants/urls";

export default function Registration() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [PictureURL, setPictureURL] = useState("");

  function SubmitData() {
    axios
      .post(URL_Register, {
        email: Email,
        name: Name,
        image: PictureURL,
        password: Password,
      })
      .then(() => navigate("/"))
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <Container>
      <MainLogo src={Logo} />
      <Form>
        <input
          data-identifier="input-email"
          placeholder="   email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-identifier="input-password"
          placeholder="   senha"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          data-identifier="input-name"
          placeholder="   nome"
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          data-identifier="input-photo"
          placeholder="   foto"
          type="url"
          value={PictureURL}
          onChange={(e) => setPictureURL(e.target.value)}
        />
        <StyledButton onClick={() => SubmitData()} type="submit">
          Cadastrar
        </StyledButton>
      </Form>
      <Register to="/" data-identifier="back-to-login-action">
        Já tem uma conta? Faça login!
      </Register>
    </Container>
  );
}
