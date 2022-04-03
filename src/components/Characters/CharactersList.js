import { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";

const CharactersList = ({ character }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col md={3} sm={12} className="character__separation" key={character.id}>
      <Card className="character__card">
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title className="card-title__color">
            <h5>{character.name}</h5>
          </Card.Title>

          <Button
            variant="primary"
            className="see_more_btn"
            size="sm"
            onClick={handleShow}
          >
            See more
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{character.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card.Img variant="top" src={character.image} />
              <Card.Text>
                <div>
                  <p>Specie: {character.species}</p>
                  <p>State: {character.status}</p>
                </div>
              </Card.Text>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
