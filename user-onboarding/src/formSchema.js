import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  tos: yup.boolean()
});
