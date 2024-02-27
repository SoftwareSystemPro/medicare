// your-blog-fetcher.js faylida
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// ApolloClient obyektini yaratish
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

const client = new ApolloClient({
  uri: graphAPI, // GraphQL server manzili
  cache: new InMemoryCache(),
});

// GraphQL so'rovi uchun funktsiya
export async function fetchCategoryData() {
  try {
    // GraphQL so'rovi
    const { data } = await client.query({
      query: gql`
      query Categories {
        categories {
          categorySlug
        }
      }
      `,
    });
    return data.categories; // Ma'lumotlar
  } catch (error) {
    console.error('Blog ma\'lumotlarini olishda xatolik:', error);
    return [];
  }
}
