import { Link } from "react-router-dom";
import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { NavContainer } from "../../components/NavContainer";
import AllHabitsAllTime from "../../components/AllHabitsAllTime";
import {
  AddHabits,
  ButtonDay,
  CancelOrSaveContainer,
  NewHabit,
  NoHabits,
} from "./HabitsStyled";
import { useState } from "react";

export default function Habits() {
  // useState:Habits array vazia? Mostrar NoHabits

  const TodosHabitos = [
    {
      id: 1,
      name: "Nome do hábito",
      days: [1, 3, 5],
    },
    {
      id: 2,
      name: "Nome do hábito 2",
      days: [1, 3, 4, 6],
    },
  ];

  const [DaysWeek, setDaysWeek] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const TextNoHabits =
    "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

  const [CardsHabits, setCardsHabits] = useState(TodosHabitos);
  const [AddHabitsButton, setAddHabitsButton] = useState();
  const [HabitName, setHabitName] = useState("");

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

    let NewArray = [
      ...CardsHabits,
      {
        id: 3,
        name: HabitName,
        days: HabitDays,
      },
    ];
    setCardsHabits(NewArray);
  }

  return (
    <Container>
      <NavContainer>
        <Link to="/cadastro">CADASTRO</Link>
        <Link to="/hoje">HOJE</Link>
      </NavContainer>
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
        />
      ) : (
        <NoHabits>{TextNoHabits}</NoHabits>
      )}
      <Footer />
    </Container>
  );
}
