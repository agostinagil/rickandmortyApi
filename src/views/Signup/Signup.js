import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const Signup = () => {
  return (
    <>
      <Container className="register__cont">
        <Row className="box__register">
          <Col className="register__box">
            <h1>Register</h1>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">*</InputGroup.Text>
              <FormControl
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Button>Submit</Button>

            <Col>
              <span>*Disabled until we have a database connection*</span>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
