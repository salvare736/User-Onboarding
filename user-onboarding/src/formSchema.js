import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be 8 chars long"),
  tos: yup
    .boolean()
    .oneOf([true], "please agree to the TOS")
});
