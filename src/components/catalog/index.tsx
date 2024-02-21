import { GetStaticPropsContext } from "next"
import CatalogFilter from "./catalogFilter/catalogFilter"
import CatalogProducts from "./catalogProducts/catalogProducts"
import styles from "./style.module.css"
import { useQuery } from "@apollo/client"
import { GET_CATEGORIES } from "src/services/category.query"
import { CategoryType } from "src/interface/category.type"
import { useRouter } from "next/router"
import { ChangeEvent } from "react"

const CatalogComponent = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const { loading, error, data } = useQuery(GET_CATEGORIES);

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
        <h2>Перчатки нестерильные</h2>
        <div className={styles.catalog}>
          <CatalogFilter />
          <CatalogProducts />
        </div>
      </div>
    </div>
  );
}

export default CatalogComponent
