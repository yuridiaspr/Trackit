import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { Header, ListHabits } from "./TodayStyled";
import AllHabitsToday from "../../components/AllHabitsToday";
import { NoHabits } from "../2-Habits/HabitsStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_Today } from "../../constants/urls";

export default function Today({ Token }) {
  const [TodayHabits, setTodayHabits] = useState([]);

  const TextNoHabits =
    "Você não tem nenhum hábito cadastrado hoje. Bom descanso!";

  useEffect(() => {
    const URL = URL_Today;

    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => {
      setTodayHabits(res.data);
    });

    promise.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <Container>
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
