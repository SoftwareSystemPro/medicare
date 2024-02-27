import { gql } from "@apollo/client";

export const GET_BLOG =  gql`
query MyQuery($slug: String) {
    blogs(where: {slug: $slug}) {
      titleEn
      titleRu
      titleUz
      keywords
      descriptionEn {
        html
      }
      descriptionRu {
        html
        text
      }
      descriptionUz {
        html
      }
      image {
        url
      }
    }
  }
`
