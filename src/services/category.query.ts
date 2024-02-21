import { gql } from "@apollo/client";

export const GET_CATEGORIES =  gql`
query Categories {
    categories {
      categoryEn
      categoryRu
      categorySlug
      categoryUz
    }
  }
`
