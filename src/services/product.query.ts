import { gql } from "@apollo/client";

export const GET_PRODUCTCARD =  gql`
query ProductCard($categorySlug: String) {
  products(where: {category: {categorySlug: $categorySlug}}, first: 1000) {
    titleEn
    titleRu
    titleUz
    image1 {
      url
    }
    category {
      categoryEn
      categoryRu
      categorySlug
      categoryUz
    }
    pdf {
      url
    }
    slug
    price
    size
  }
}
`
