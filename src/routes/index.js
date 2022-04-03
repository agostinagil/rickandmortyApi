import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharactersProvider } from "../contexts/CharactersContexts";

import Characters from "../views/Characters/Characters";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../views/Dashboard/Dashboard";
import Signup from "../views/Signup/Signup";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <CharactersProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
          </Routes>
        </CharactersProvider>
      </BrowserRouter>
    </>
  );
};
export default Rutas;
