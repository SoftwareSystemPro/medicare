import { gql } from "@apollo/client";

export const GET_CATEGORIES =  gql`
query Categories {
    categories(first: 1000) {
      categoryEn
      categoryRu
      categorySlug
      categoryUz
    }
  }
`

export const GET_CATEGORIES_SLUG =  gql`
query Category($categorySlug: String!) {
  category(where: {categorySlug: $categorySlug}) {
    categoryRu
  }
}
`
