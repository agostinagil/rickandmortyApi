import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import CharactersNav from "../components/Navbar/Navbar";
import Search from "../components/Search";

const contextDefault = {
  charactersResults: [],
  loading: false,
  searchCharacter: (item) => {},
  paginationCharacters: "character",
  handlePage: (endpoint) => {},
  // currentPage: 1
};

export const CharactersContext = createContext(contextDefault);
const { Provider } = CharactersContext;

export const CharactersProvider = ({ children }) => {
  const navigate = useNavigate();

  const [character, setCharacter] = useState("");
  const [characters, loading] = useFetch(`/character/?name=${character}`);
  const [page, setPage] = useState("character");
  const [pages] = useFetch(`character?${page}`);

  const handlePage = (newPage) => {
    navigate("/characters");
    setPage(newPage);
  };

  const searchCharacter = (c) => {
    navigate("/characters");
    setCharacter(c);
  };
  const { info: pageInfo } = pages;
  const { results: charactersResults } = characters;
  return (
    <Provider
      value={{
        charactersResults,
        loading,
        searchCharacter,
        pageInfo,
        handlePage,
      }}
    >
      <CharactersNav>
        <Search />
      </CharactersNav>
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
