import { Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CharactersList = ({ character }) => {
  return (
    <Col md={3} sm={12} className="character__separation" key={character.id}>
      <Card className="character__card">
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>
            <NavLink
              to={`characters/${character.id}`}
              className="card-title__color"
            >
              <h5>{character.name}</h5>
            </NavLink>
          </Card.Title>
          <Card.Text>
            <div>
              <p>Specie: {character.species}</p>
              <p>State: {character.status}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CharactersList;

/* <Row className="mt-4">
              <p
                onClick={() => addFavorite(product)}
                style={{ cursor: "pointer" }}
              >
                Agregar a favoritos
              </p>
            </Row>*/

//linea 25: poner un link que lleve a una pagina con los episodios del personaje
/* <Row>
     <h5>Episode: {character.episode}</h5> 
   </Row>
 */
