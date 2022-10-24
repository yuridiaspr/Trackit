import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/1-InitialPage/InitialPage";
import Registration from "./pages/1-InitialPage/Registration";
import Habits from "./pages/2-Habits/Habits";
import Today from "./pages/3-Today/Today";
import Historic from "./pages/4-Historic/Historic";
import { useState } from "react";

function App() {
  const [Token, setToken] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<InitialPage setToken={setToken} />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<Habits Token={Token} />} />
        <Route path="/hoje" element={<Today Token={Token} />} />
        <Route path="/historico" element={<Historic Token={Token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
