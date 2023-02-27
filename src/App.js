import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/1-InitialPage/InitialPage";
import SignUp from "./pages/1-InitialPage/SignUp";
import Habits from "./pages/2-Habits/Habits";
import Today from "./pages/3-Today/Today";
import Historic from "./pages/4-Historic/Historic";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [Token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ progress, setProgress }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<InitialPage setToken={setToken} />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits Token={Token} />} />
            <Route path="/hoje" element={<Today Token={Token} />} />
            <Route path="/historico" element={<Historic Token={Token} />} />
          </Routes>
        </UserContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
