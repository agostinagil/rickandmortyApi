import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to="/characters" activeClassName="active__nav">
        Characters
      </NavLink>
      <h1> Hola</h1>
    </>
  );
};

export default Home;
