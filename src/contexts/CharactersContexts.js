import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import Search from "../components/Search";

const contextDefault = {
  charactersResults: [],
  loading: false,
  searchCharacter: (item) => {},
};

export const CharactersContext = createContext(contextDefault);
const { Provider } = CharactersContext;

export const CharactersProvider = ({ children }) => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState("");
  const [characters, loading] = useFetch(`character/?name=${character}`);

  const searchCharacter = (c) => {
    navigate("/characters");
    setCharacter(c);
  };

  const { results: charactersResults } = characters;
  return (
    <Provider value={{ charactersResults, loading, searchCharacter }}>
      <Search />
      {children}
    </Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context)
    throw new Error(
      "useCharacters must be initializad within CharactersProvider"
    );
  return context;
};
