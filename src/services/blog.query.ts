import { gql } from "@apollo/client";

export const GET_BLOG =  gql`
query MyQuery($slug: String) {
    blogs(where: {slug: $slug}) {
      titleEn
      titleRu
      titleUz
      descriptionEn {
        html
      }
      descriptionRu {
        html
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
