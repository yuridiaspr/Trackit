import { Link } from "react-router-dom";
import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { NavContainer } from "../../components/NavContainer";
import { Header, ListHabits } from "./TodayStyled";
import AllHabitsToday from "../../components/AllHabitsToday";
import { NoHabits } from "../2-Habits/HabitsStyled";

export default function Today() {
  const TodayHabits = [
    {
      id: 3,
      name: "Acordar",
      done: true,
      currentSequence: 1,
      highestSequence: 1,
    },
    {
      id: 4,
      name: "Dormir no Horário",
      done: false,
      currentSequence: 5,
      highestSequence: 5,
    },
    {
      id: 5,
      name: "Preparar lanche",
      done: true,
      currentSequence: 5,
      highestSequence: 5,
    },
    {
      id: 6,
      name: "Exercicios",
      done: true,
      currentSequence: 2,
      highestSequence: 10,
    },
  ];

  const TextNoHabits =
    "Você não tem nenhum hábito cadastrado hoje. Bom descanso!";

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

      {TodayHabits.length !== 0 ? (
        <ListHabits>
          {TodayHabits.map((Habit) => (
            <AllHabitsToday Habit={Habit} />
          ))}
        </ListHabits>
      ) : (
        <NoHabits>{TextNoHabits}</NoHabits>
      )}

      <Footer />
    </Container>
  );
}
