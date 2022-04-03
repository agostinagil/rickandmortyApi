import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import mainImage from "../../assets/images/homeImg.jpg";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Image className="main_img " src={mainImage} alt="main" />
        </Row>
      </Container>
    </>
  );
};

export default Home;
