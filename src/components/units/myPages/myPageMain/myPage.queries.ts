import { gql } from "@apollo/client";
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      picture
      email
      createdAt
      userPoint {
        amount
        createdAt
        updatedAt
      }
    }
  }
`;
