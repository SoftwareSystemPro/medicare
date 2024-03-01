import { gql } from "@apollo/client";

export const GET_BLOGS_CARD =  gql`
query BlogsCard {
    blogss(first: 1000) {
      titleEn
      titleRu
      titleUz
      image {
        url
      }
      slug
    }
  }
  
`
