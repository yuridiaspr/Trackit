import React, { useContext } from "react";
import trashIcon from "../assets/images/dump.svg";
import WeekDayButtons from "../components/WeekDayButtons";
import apiHabits from "../services/apiHabits";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

function HabitCard({ id, name, days, getHabitsList }) {
  const { user } = useContext(UserContext);

  function handleDelete() {
    const confirmation = window.confirm(
      "Tem certeza que deseja deletar esse hábito?"
    );

    if (confirmation) {
      apiHabits
        .deleteHabit(user.token, id)
        .then((res) => {
          getHabitsList();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }

  return (
    <Container>
      <Title>{name}</Title>
      <WeekDayButtons selectedDays={days} />
      <img src={trashIcon} onClick={handleDelete} alt="Ícone Deletar" />
    </Container>
  );
}

export default HabitCard;

const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px;
  margin: 5px 0;
  background: #ffffff;
  border-radius: 5px;
  position: relative;

  img {
    width: 15px;
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;
  word-break: break-all;
  width: 80%;
  color: #666666;
`;
