import { Link } from "react-router-dom";
import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { NavContainer } from "../../components/NavContainer";
import AllHabits from "../../components/AllHabits";
import { Header, ListHabits } from "./TodayStyled";

export default function Today() {
  return (
    <Container>
      <NavContainer>
        <Link to="/habitos">HABITOS</Link>
        <Link to="/historico">HISTÓRICO</Link>
      </NavContainer>
      <Upside />
      <Header selected={false}>
        <h1>Segunda, 17/05</h1>
        <h2>Nenhum hábito concluído ainda</h2>
      </Header>
      <ListHabits>
        <AllHabits current={false} record={true} checked={true} />
        <AllHabits current={true} record={false} checked={true} />
        <AllHabits current={true} record={true} checked={false} />
        <AllHabits current={true} record={false} checked={true} />
        <AllHabits current={false} record={false} checked={false} />
      </ListHabits>
      <Footer />
    </Container>
  );
}
