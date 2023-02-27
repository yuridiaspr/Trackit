import {
  Container,
  MainLogo,
  Form,
  Register,
  StyledButton,
  StyledInput,
} from "./InitialPageStyled";
import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { URL_Login } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function InitialPage({ setToken }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const promisse = axios.post(URL_Login, form);
    promisse.then((res) => {
      setIsLoading(false);
      const { id, name, image, token } = res.data;
      // localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify({ id, name, image, token }));
      navigate("/hoje");
    });
    promisse.catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
  }

  return (
    <Container>
      <MainLogo src={Logo} />
      <Form onSubmit={handleLogin}>
        <StyledInput
          data-identifier="input-email"
          name="email"
          placeholder="email"
          type="email"
          required
          disabled={isLoading}
          value={form.email}
          onChange={handleForm}
        />
        <StyledInput
          data-identifier="input-password"
          name="password"
          placeholder="senha"
          type="password"
          required
          disabled={isLoading}
          value={form.password}
          onChange={handleForm}
        />
        <StyledButton
          data-identifier="login-btn"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ThreeDots width={50} height={50} color="#FFFFFF" />
          ) : (
            "Entrar"
          )}
        </StyledButton>
      </Form>

      <Register to="/cadastro" data-identifier="sign-up-action">
        Não tem uma conta? Cadastre-se!
      </Register>
    </Container>
  );
}
