import { GetStaticPropsContext } from "next"
import CatalogFilter from "./catalogFilter/catalogFilter"
import CatalogProducts from "./catalogProducts/catalogProducts"
import styles from "./style.module.css"
import { useQuery } from "@apollo/client"
import { GET_CATEGORIES } from "src/services/category.query"
import { CategoryType } from "src/interface/category.type"
import { useRouter } from "next/router"
import { ChangeEvent } from "react"
import { GET_PRODUCTCARD } from "src/services/product.query"
import { CardProductType } from "src/interface/card.type"

const CatalogComponent = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const {query} = useRouter();
  const {loading:CatalogLoading , error:CatalogError , data:CatalogData} = useQuery(GET_PRODUCTCARD,{
    variables:{categorySlug:query.catalog}
  })
  
  const HandleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(`/catalog/${e.currentTarget.value}`);
  };

  return (
    <div className='container'>
      <div className={styles.CatalogSection}>
        <div className={styles.top_catalog}>
          <span>Каталог:</span>
          <select onChange={HandleChangeCategory} id="">
            {data?.categories?.map((elem: CategoryType, index: number) => (
              <option key={index} value={elem.categorySlug}>
                {locale == "ru"
                  ? elem.categoryRu
                  : locale == "en"
                  ? elem.categoryEn
                  : locale == "uz"
                  ? elem.categoryUz
                  : elem.categoryRu}
              </option>
            ))}
          </select>
        </div>
        <h2>{CatalogData?.products?.map((elem:CardProductType, index:number) =>                 locale == "ru"
                  ? elem.category.categoryRu
                  : locale == "en"
                  ? elem.category.categoryEn
                  : locale == "uz"
                  ? elem.category.categoryUz
                  : elem.category.categoryRu)[0]}</h2>
        <div className={styles.catalog}>
          <CatalogFilter />
          <CatalogProducts />
        </div>
      </div>
    </div>
  );
}

export default CatalogComponent
