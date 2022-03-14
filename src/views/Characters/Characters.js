import { Container, Row } from "react-bootstrap";
import CharactersList from "../../components/Characters/CharactersList";

import Paginate from "../../components/Pagination/Pagination";
import { useCharacters } from "../../contexts/CharactersContexts";

const CharactersView = () => {
  const { loading, charactersResults, info, handlePage } = useCharacters();

  if (loading) return <h3> Cargando...</h3>;
  return (
    <>
      <Container>
        <Paginate {...info} handlePage={handlePage} />
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
      </Container>
    </>
  );
};

export default CharactersView;

// 1State
// :
// "character?page=2"

// Fetch

// 2State
// :
// {info: {…}, results: Array(20)}

// info
// :
// {count: 826, next: "https://rickandmortyapi.com/api…}
// count
// :
// 826
// pages
// :
// 42
// next
// :
// "https://rickandmortyapi.com/api/character?page=3"
// prev
// :
// "https://rickandmortyapi.com/api/character?page=1"
// new entry
// :
// ""

// results
// :
// [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// new entry
// :
// ""
// 3State
// :
// false

// 4State
// :
// false

// 5Effect
// :
// ƒ () {}
