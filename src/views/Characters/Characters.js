// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
//import { useFetch } from "../../hooks/useFetch";
import CharactersList from "../../components/Characters/CharactersList";

import Paginate from "../../components/Pagination/Pagination";
import { useCharacters } from "../../contexts/CharactersContexts";

const CharactersView = () => {
  // const navigate = useNavigate();
  const { loading, charactersResults, pageInfo, handlePage } = useCharacters();
  // const [page, setPage] = useState("character?page=1");
  // const [{ info }] = useFetch(page);

  // const handlePage = (newPage) => {
  //   const pageNew = `character?${newPage}`;
  //   navigate("/characters");
  //   setPage(pageNew);
  // };

  if (loading) return <h3> Cargando...</h3>;
  return (
    <>
      <Container>
        <Row>
          <div className="characters_header">
            <h1>Characters</h1>
          </div>
        </Row>
        <Row className="justify-content-center">
          {charactersResults?.length > 0 ? (
            charactersResults.map((character) => (
              <CharactersList key={character.id} character={character} />
            ))
          ) : (
            <h3>Ups, no encontramos tu personaje</h3>
          )}
        </Row>
        <Paginate {...pageInfo} handlePage={handlePage} />
      </Container>
    </>
  );
};

export default CharactersView;
