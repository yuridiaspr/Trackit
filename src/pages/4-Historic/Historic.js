import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { Header, NoHistoric } from "./HistoricStyled";

export default function Historic({ Token }) {
  return (
    <Container>
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
