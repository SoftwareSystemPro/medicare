import { gql } from "@apollo/client";


export const GET_BLOGS = gql`
query BlogsCard {
  blogss {
    titleEn
    titleRu
    titleUz
    slug
    image {
      url
    }
    date
    descriptionEn {
      text
    }
    descriptionRu {
      text
    }
    descriptionUz {
      text
    }
  }
}
`