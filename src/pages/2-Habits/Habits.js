import { Link } from "react-router-dom";
import Upside from "../../components/Upside";
import Footer from "../../components/Footer";
import { Container } from "../../components/BodyContainer";
import { NavContainer } from "../../components/NavContainer";
import {
  AddHabits,
  ButtonDay,
  CancelOrSaveContainer,
  ExistingHabits,
  NewHabit,
  NoHabits,
} from "./HabitsStyled";
import Trash from "../../assets/images/GroupTrash.svg";

export default function Habits() {
  // useState:Habits array vazia? Mostrar NoHabits

  // useState: RegisterNewHabit
  // onclick: Register New Habit

  // usestate: Selected (cada botão)
  // onclick setSelected(!selected)

  // onSubmit (guardar na array)

  const TextNoHabits =
    "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

  return (
    <Container>
      <NavContainer>
        <Link to="/cadastro">CADASTRO</Link>
        <Link to="/hoje">HOJE</Link>
      </NavContainer>
      <Upside />
      <AddHabits>
        <p>Meus hábitos</p>
        <button>
          <p>+</p>
        </button>
      </AddHabits>
      <NewHabit>
        <input placeholder="  nome do hábito" />
        <div>
          <ButtonDay selected={false}>D</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>T</ButtonDay>
          <ButtonDay selected={true}>Q</ButtonDay>
          <ButtonDay selected={false}>Q</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>S</ButtonDay>
        </div>
        <CancelOrSaveContainer>
          <button>Cancelar</button>
          <button>Salvar</button>
        </CancelOrSaveContainer>
      </NewHabit>
      <ExistingHabits>
        <p>Ler 1 capítulo de livro</p>
        <div>
          <ButtonDay selected={false}>D</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>T</ButtonDay>
          <ButtonDay selected={true}>Q</ButtonDay>
          <ButtonDay selected={false}>Q</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>S</ButtonDay>
        </div>
        <img src={Trash} alt="Trash Button" />
      </ExistingHabits>
      <ExistingHabits>
        <p>Ler 1 capítulo de livro</p>
        <div>
          <ButtonDay selected={false}>D</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>T</ButtonDay>
          <ButtonDay selected={true}>Q</ButtonDay>
          <ButtonDay selected={false}>Q</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>S</ButtonDay>
        </div>
        <img src={Trash} alt="Trash Button" />
      </ExistingHabits>
      <ExistingHabits>
        <p>Ler 1 capítulo de livro</p>
        <div>
          <ButtonDay selected={false}>D</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>T</ButtonDay>
          <ButtonDay selected={true}>Q</ButtonDay>
          <ButtonDay selected={false}>Q</ButtonDay>
          <ButtonDay selected={true}>S</ButtonDay>
          <ButtonDay selected={false}>S</ButtonDay>
        </div>
        <img src={Trash} alt="Trash Button" />
      </ExistingHabits>
      <NoHabits>{TextNoHabits}</NoHabits>
      <Footer />
    </Container>
  );
}
