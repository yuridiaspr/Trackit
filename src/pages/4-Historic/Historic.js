import styled from "styled-components";
import { Link } from "react-router-dom";
import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { NavContainer } from "../../components/NavContainer";
import { Header, NoHistoric } from "./HistoricStyled";

export default function Historic() {
  return (
    <Container>
      <NavContainer>
        <Link to="/hoje">HOJE</Link>X
      </NavContainer>
      <Upside />
      <Header>
        <h1>Histórico</h1>
      </Header>
      <NoHistoric>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </NoHistoric>
      <Footer />
    </Container>
  );
}
