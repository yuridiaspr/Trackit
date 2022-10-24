import styled from "styled-components";
import { BackgroundWhite, DescriptionTextColor } from "../constants/colors";
import Trash from "../assets/images/GroupTrash.svg";
import { ButtonDay } from "../pages/2-Habits/HabitsStyled";
import axios from "axios";

export default function AllHabitsAllTime(props) {
  const { CardsHabits, setCardsHabits, config, URL_Habit } = props;

  function DeleteHabit(id) {
    if (window.confirm("Você tem certeza?") === true) {
      const NewArray = CardsHabits.filter(function (element) {
        return element.id !== id;
      });
      setCardsHabits(NewArray);
      console.log(URL_Habit + `/${id}`);
      const promisse = axios.delete(URL_Habit + `/${id}`, config);
      promisse.catch((err) => alert(err.response.data.message));
    }
  }

  return (
    <>
      {CardsHabits.map((habit) => (
        <ExistingHabits key={habit.id} habit={habit}>
          <p>{habit.name}</p>
          <div>
            <ButtonDay selected={habit.days.includes(0)}>D</ButtonDay>
            <ButtonDay selected={habit.days.includes(1)}>S</ButtonDay>
            <ButtonDay selected={habit.days.includes(2)}>T</ButtonDay>
            <ButtonDay selected={habit.days.includes(3)}>Q</ButtonDay>
            <ButtonDay selected={habit.days.includes(4)}>Q</ButtonDay>
            <ButtonDay selected={habit.days.includes(5)}>S</ButtonDay>
            <ButtonDay selected={habit.days.includes(6)}>S</ButtonDay>
          </div>
          <img
            onClick={() => DeleteHabit(habit.id)}
            src={Trash}
            alt="Trash Button"
          />
        </ExistingHabits>
      ))}
    </>
  );
}

const ExistingHabits = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 91px;
  background-color: ${BackgroundWhite};
  border-radius: 5px;
  margin-bottom: 10px;
  p {
    width: 90%;
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${DescriptionTextColor};

    margin-top: 15px;
    margin-bottom: 8px;
  }
  div {
    width: 90%;
  }
  img {
    position: absolute;
    top: 11px;
    right: 10px;
    height: 15px;
    width: 13px;
    border-radius: 0px;
  }
`;
