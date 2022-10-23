import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/1-InitialPage/InitialPage";
import Registration from "./pages/1-InitialPage/Registration";
import Habits from "./pages/2-Habits/Habits";
import Today from "./pages/3-Today/Today";
import Historic from "./pages/4-Historic/Historic";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
