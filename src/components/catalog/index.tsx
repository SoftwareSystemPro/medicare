import CatalogFilter from "./catalogFilter/catalogFilter"
import CatalogProducts from "./catalogProducts/catalogProducts"
import styles from "./style.module.css"

const CatalogComponent = () => {
  const data = [1 , 2, 3, ,4 ,5,6 ,7]
  return (
    <div className='container'>
            <div className={styles.CatalogSection}>
              <div className={styles.top_catalog}>
                <span>Каталог:</span>
                <select id="">
                  {data.map((elem , index) =>
                  <option key={index} value="Перчатки нестерильные">Перчатки нестерильные</option>
                  )}
                </select>
              </div>
            <h2>Перчатки нестерильные</h2>
        <div className={styles.catalog}>
            <CatalogFilter/>
            <CatalogProducts/>
        </div>
            </div>
    </div>
  )
}

export default CatalogComponent