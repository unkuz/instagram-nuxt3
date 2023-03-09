import { object, ref, string } from 'yup'

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
