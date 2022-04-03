import { createContext, useContext, useReducer } from "react";
import jwt_decode from "jwt-decode";
import { LOGOUT, SET_AUTH } from "../actions/auth";
import { authReducer, initialState } from "../reducers/auth";

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("auth")) return true;
    return false;
  };

  const getUserInformation = () => jwt_decode(state.jwt);

  const login = ({ username, password }) => {
    //HTTP request axios.post({username, password}). Server response = jwt
    //API.post("/auth"{username, password}) to send it to backend

    if (username === "Rick" && password === "123456") {
      const { jwt } = {
        ok: true,
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJpY2siLCJpYXQiOjEyMzQ1Nn0.UgIv56VGXCuHyQfgxd3Q8mZpr9orYZQukg1WvDiBy48",
      };
      setAuth({ jwt });
      localStorage.setItem("auth", jwt);
      return jwt;
    } else {
      return null;
    }
  };

  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } });
  };
  return (
    <Provider
      value={{ state, setAuth, login, logout, getUserInformation, isLoggedIn }}
    >
      {children}
    </Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped with AuthProvider");
  return context;
};
