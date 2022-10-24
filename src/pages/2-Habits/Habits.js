import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import AllHabitsAllTime from "../../components/AllHabitsAllTime";
import {
  AddHabits,
  ButtonDay,
  CancelOrSaveContainer,
  NewHabit,
  NoHabits,
} from "./HabitsStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_Habit } from "../../constants/urls";

export default function Habits({ Token }) {
  const [DaysWeek, setDaysWeek] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [CardsHabits, setCardsHabits] = useState([]);
  const [AddHabitsButton, setAddHabitsButton] = useState(false);
  const [HabitName, setHabitName] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };

  useEffect(() => {
    const promisse = axios.get(URL_Habit, config);

    promisse.then((res) => {
      setCardsHabits(res.data);
    });

    promisse.catch((err) => alert(err.response.data.message));
  }, []);

  const TextNoHabits =
    "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

  function SelectEachDay(event, i) {
    event.preventDefault();
    let NewArray = [...DaysWeek];
    NewArray[i] = !DaysWeek[i];
    setDaysWeek(NewArray);
  }

  function CreateNewHabit(event) {
    event.preventDefault();

    let HabitDays = [];

    for (let j = 0; j < 7; j++) {
      if (DaysWeek[j] === true) {
        HabitDays.push(j);
      }
    }

    let NewArray =
      // ...CardsHabits,
      {
        name: HabitName,
        days: HabitDays,
      };
    // setCardsHabits(NewArray);
    const promisse = axios.post(URL_Habit, NewArray, config);
    promisse.then((res) => {
      // setCardsHabits(CardsHabits.push(res.data));
      setHabitName("");
      setAddHabitsButton(false);
      setDaysWeek([false, false, false, false, false, false, false]);
    });
    promisse.catch((err) => alert(err.response.data.message));

    // .then((res) => setCardsHabits(CardsHabits.push(res.data)))
  }

  return (
    <Container>
      <Upside />
      <AddHabits>
        <p>Meus hábitos</p>
        <button onClick={() => setAddHabitsButton(!AddHabitsButton)}>
          <p>+</p>
        </button>
      </AddHabits>
      {AddHabitsButton ? (
        <NewHabit onSubmit={CreateNewHabit}>
          <input
            placeholder="  nome do hábito"
            type="text"
            value={HabitName}
            onChange={(e) => setHabitName(e.target.value)}
          />
          <div>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 0)}
              selected={DaysWeek[0]}
            >
              D
            </ButtonDay>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 1)}
              selected={DaysWeek[1]}
            >
              S
            </ButtonDay>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 2)}
              selected={DaysWeek[2]}
            >
              T
            </ButtonDay>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 3)}
              selected={DaysWeek[3]}
            >
              Q
            </ButtonDay>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 4)}
              selected={DaysWeek[4]}
            >
              Q
            </ButtonDay>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 5)}
              selected={DaysWeek[5]}
            >
              S
            </ButtonDay>
            <ButtonDay
              onClick={(event) => SelectEachDay(event, 6)}
              selected={DaysWeek[6]}
            >
              S
            </ButtonDay>
          </div>
          <CancelOrSaveContainer>
            <button onClick={() => setAddHabitsButton(false)}>Cancelar</button>
            <button type="submit">Salvar</button>
          </CancelOrSaveContainer>
        </NewHabit>
      ) : (
        <></>
      )}
      {CardsHabits.length !== 0 ? (
        <AllHabitsAllTime
          CardsHabits={CardsHabits}
          setCardsHabits={setCardsHabits}
          URL_Habit={URL_Habit}
          config={config}
        />
      ) : (
        <NoHabits>{TextNoHabits}</NoHabits>
      )}
      <Footer />
    </Container>
  );
}
