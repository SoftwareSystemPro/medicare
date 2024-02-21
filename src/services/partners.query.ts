import { gql } from "@apollo/client";

export const GET_PARTNERS =  gql`
query Partners {
    partners_image {
      image {
        url
      }
    }
  }
  `
