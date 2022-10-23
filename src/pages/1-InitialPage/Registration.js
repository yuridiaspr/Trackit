import { Container, MainLogo, Form, Register } from "./InitialPageStyled";
import Logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <>
      <NavContainer>
        <Link to="/">INICIAL</Link>
        <Link to="/habitos">HABITOS</Link>
      </NavContainer>
      <Container>
        <MainLogo src={Logo} />
        <Form>
          <input placeholder="   email" type="email" />
          <input placeholder="   senha" type="password" />
          <input placeholder="   nome" type="text" />
          <input placeholder="   foto" alt="text" type="url" />
          <button type="submit">Cadastrar</button>
        </Form>
        <Register>Já tem uma conta? Faça login!</Register>
      </Container>
    </>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
  }
`;
