import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharactersProvider } from "../contexts/CharactersContexts";

import Characters from "../views/Characters/Characters";
import Home from "../views/Home/Home";

const Rutas = () => (
  <BrowserRouter>
    <CharactersProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </CharactersProvider>
  </BrowserRouter>
);

export default Rutas;
