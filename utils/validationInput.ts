import { object, ref, string } from 'yup'

/* This code defines a schema for validating user input for authentication purposes. It includes two
objects, `SIGNIN` and `SIGNUP`, each with their own set of validation rules for the `user_name`,
`password`, and `re_password` fields. The `yup` library is used to define these validation rules,
which include requirements for minimum and maximum length, as well as ensuring that the
`re_password` field matches the `password` field. This schema can be used to validate user input
before it is processed by the application. */
export const SCHEMA_AUTH = {
  SIGNIN: object({
    user_name: string()
      .required('Username is a required field')
      .min(3, 'Username at least 3 charaters')
      .max(100, 'Maximum allow 100 characters'),
    password: string()
      .required('Password is a required field')
      .min(3, 'Password at least 3 charaters')
      .max(100, 'Maximum allow 100 characters'),
  }),
  SIGNUP: object({
    user_name: string()
      .required('Username is a required field')
      .min(3, 'Username at least 3 charaters')
      .max(100, 'Maximum allow 100 characters'),
    password: string()
      .required('Password is a required field')
      .min(3, 'Password at least 3 charaters')
      .max(100, 'Maximum allow 100 characters'),
    re_password: string().oneOf([ref('password')], 'Confirm password must match'),
  }),
}
