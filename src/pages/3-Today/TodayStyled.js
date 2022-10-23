import styled from "styled-components";
import { SecundaryColor, CheckedHabits } from "../../constants/colors";

export const Header = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 28px;
  margin-bottom: 28px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */

    color: ${SecundaryColor};
  }
  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: ${(props) =>
      props.selected
        ? CheckedHabits.checked.text
        : CheckedHabits.unchecked.text};
  }
`;

export const ListHabits = styled.div`
  width: 90%;
`;
