import * as Yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = {
  username: Yup.string().required("User field is required"),
  password: Yup.string().required("Password field is required"),
};
