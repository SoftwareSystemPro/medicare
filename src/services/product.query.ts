import { gql } from "@apollo/client";

export const GET_PRODUCTCARD =  gql`
query ProductCard($categorySlug: String) {
  products(where: {category: {categorySlug: $categorySlug}}) {
    titleEn
    titleRu
    titleUz
    image1 {
      url
    }
    slug
    category {
      categoryEn
      categoryRu
      categorySlug
      categoryUz
    }
    slug
  }
}
`
