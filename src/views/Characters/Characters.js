import { Container, Row } from "react-bootstrap";
import CharactersList from "../../components/Characters/CharactersList";
import { useCharacters } from "../../contexts/CharactersContexts";

const CharactersView = () => {
  const { loading, charactersResults } = useCharacters();
  if (loading) return <h3> Cargando...</h3>;
  return (
    <>
      <Container>
        <Row>
          <div className="characters_header">
            <h1>Rick and Morty's characters</h1>
          </div>
        </Row>
        <Row className="justify-content-center">
          {charactersResults?.length > 0 ? (
            charactersResults.map((character) => (
              <CharactersList character={character} />
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
