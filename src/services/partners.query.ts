import { gql } from "@apollo/client";

export const GET_PARTNERS =  gql`
query Partners {
    partners_image(first: 1000) {
      image {
        url
      }
    }
  }
  `
