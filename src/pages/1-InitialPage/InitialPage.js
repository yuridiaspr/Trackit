import { Container, MainLogo, Form, Register } from "./InitialPageStyled";
import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { URL_Login } from "../../constants/urls";

export default function InitialPage({ setToken }) {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function login() {
    const promisse = axios.post(URL_Login, {
      email: Email,
      password: Password,
    });
    promisse.then((res) => {
      console.log(res);
      setToken(res.data.token);
      navigate("/hoje");
    });
    promisse.catch((err) => alert(err.response.data.message));
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
        <button data-identifier="login-btn" onClick={login} type="submit">
          Entrar
        </button>
      </Form>
      <Register to="/cadastro" data-identifier="sign-up-action">
        Não tem uma conta? Cadastre-se!
      </Register>
    </Container>
  );
}
