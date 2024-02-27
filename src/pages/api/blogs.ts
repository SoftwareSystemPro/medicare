// your-blog-fetcher.js faylida
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// ApolloClient obyektini yaratish
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

const client = new ApolloClient({
  uri: graphAPI, // GraphQL server manzili
  cache: new InMemoryCache(),
});

// GraphQL so'rovi uchun funktsiya
export async function fetchBlogsData() {
  try {
    // GraphQL so'rovi
    const { data } = await client.query({
      query: gql`
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
      `,
    });
    return data.blogss; // Ma'lumotlar
  } catch (error) {
    console.error('Blog ma\'lumotlarini olishda xatolik:', error);
    return [];
  }
}
