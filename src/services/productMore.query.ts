import { gql } from "@apollo/client";

export const GET_PRODUCTMORE =  gql`
query ProductMore($slug: String) {
    product(where: {slug: $slug}) {
      keywords
      descriptionEn {
        html
        text
      }
      descriptionRu {
        html
        text
      }
      descriptionUz {
        html
        text
      }
      image1 {
        url
      }
      image2 {
        url
      }
      image3 {
        url
      }
      image4 {
        url
      }
      titleEn
      titleRu
      titleUz
      category {
        categorySlug
      }
      slug
      pdf {
        url
      }
      price
      size
    }
  }
  
`
