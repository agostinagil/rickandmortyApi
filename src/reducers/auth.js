import { SET_AUTH, LOGOUT } from "../actions/auth";

export const initialState = {
  isLoggedIn: false,
  jwt: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH: {
      const { jwt } = action.payload; //destructurar jwt de action.payload
      return {
        isLoggedIn: true,
        jwt,
      };
    }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

//Rick 123456
// jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJpY2siLCJpYXQiOjEyMzQ1Nn0
//   .UgIv56VGXCuHyQfgxd3Q8mZpr9orYZQukg1WvDiBy48;
