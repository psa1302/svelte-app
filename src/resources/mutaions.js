import { gql } from 'apollo-boost'

export const SIGNUP = gql`
  mutation Signup(
    $name: String
    $email: String
    $handle: String
    $password: String
  ) {
    user: signup(
      user: {
        name: $name
        email: $email
        handle: $handle
        password: $password
      }
    ) {
      name
      email
      handle
    }
  }
`

export const SIGNIN = gql`
  mutation Login($email: String!, $password: String!) {
    user: login(email: $email, password: $password) {
      id
      name
      email
      handle
    }
  }
`

export const SIGNOUT = gql`
  mutation Logout {
    res: logout
  }
`
