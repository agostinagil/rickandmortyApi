import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues, validationSchema } from "./schemas";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { Container, Grid, TextField, Button, Box } from "@mui/material";
// import { Col, Row, Form } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [wrongData, setWrongData] = useState(false);
  const handleLogin = ({ username, password }) => {
    const jwt = login({ username, password });
    if (!jwt) return setWrongData(true);
    setWrongData(false);
    navigate("/dashboard");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: ({ username, password }) => {
      handleLogin({ username, password });
    },
  });
  console.log(formik?.errors);
  return (
    <Container className="login__container">
      <Grid
        container
        className="row__classes"
        direction="row"
        sx={{ justifyContent: "center" }}
        alignItems="center"
      >
        <Grid item xs={12} md={4} className="form__box">
          <form onSubmit={formik.handleSubmit}>
            <Box mt={1}>
              <TextField
                label="Username"
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.errors.username}
                autoComplete="current-username"
                fullWidth
              />
              {formik?.errors?.username && (
                <span>{formik.errors.username}</span>
              )}
            </Box>
            <Box mt={1}>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
                autoComplete="current-password"
                fullWidth
              />
              {formik?.errors?.password && (
                <span>{formik.errors.password}</span>
              )}
            </Box>
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Ingresar
              </Button>
            </Box>
          </form>
          {wrongData && <span>"Usuario o contraseña incorrecto"</span>}
        </Grid>
      </Grid>
    </Container>
  );
  // return (
  //   <Container className="login__container">
  //     <Row className="row__classes">
  //       <Col md={4} >
  //         <Form onSubmit={formik.handleSubmit}>
  //           <Form.Group className="mb-3 ">
  //             <Form.Control
  //               placeholder="Username"
  //               type="text"
  //               name="username"
  //               onChange={formik.handleChange}
  //               value={formik.values.username}
  //               error={formik.errors.username}
  //             />
  //             {formik?.errors?.username && (
  //               <span>{formik.errorrs.username}</span>
  //             )}
  //             <Form.Text className=" text__color">
  //               We'll never share your email with anyone else.
  //             </Form.Text>
  //           </Form.Group>

  //           <Form.Group className="mb-3" controlId="formBasicPassword">
  //             <Form.Control
  //               placeholder="Password"
  //               type="password"
  //               name="password"
  //               onChange={formik.handleChange}
  //               value={formik.values.password}
  //               error={formik.errors.password}
  //               fullWidth
  //             />
  //             {formik?.errors?.password && (
  //               <span>{formik.errors.password}</span>
  //             )}
  //           </Form.Group>
  //           {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //             <Form.Check type="checkbox" label="Check me out" />
  //           </Form.Group> */}
  //           <Button type="submit" color="primary" fullWidth>
  //             Submit
  //           </Button>
  //         </Form>
  //         {wrongData && <span>"Wrong user or password"</span>}
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default Login;
