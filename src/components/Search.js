import { useState } from "react";
import { Form } from "react-bootstrap";
import { useCharacters } from "../contexts/CharactersContexts";

const Search = () => {
  const { searchCharacter } = useCharacters();
  const [item, setItem] = useState("");
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      searchCharacter(item);

      setItem("");
    }
  };
  return (
    <Form.Control
      type="text"
      value={item}
      onKeyDown={handleSearch}
      onChange={(e) => setItem(e.target.value.trim())}
      placeholder="Buscar personaje"
      data-testid="search"
    />
  );
};

export default Search;

/*
  return (
    <Row className="justify-content-center mt-4 mb-4">
      <Col>
        <Form.Control
          type="text"
          value={item}
          onKeyDown={handleSearch}
          onChange={(e) => setItem(e.target.value.trim())}
          placeholder="Buscar personaje"
          data-testid="search"
        />
      </Col>
    </Row>
  );
};
*/
