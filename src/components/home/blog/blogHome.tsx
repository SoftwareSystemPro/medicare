import { useTranslations } from "next-intl"
import styles from "./style.module.css"
import Slider from "react-slick";
import { CardBlogData } from "src/services/fakedata";
import Image from "next/image";
const BlogHome = () => {
    
    const t = useTranslations('Home')
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="container">
        <div className={styles.blog}>
            <h2>{t('Blog.0')}</h2>
            <Slider {...settings}>
                {CardBlogData.map((elem,  index) =>
                    <>
                   <div  className={styles.cardBlog}>
                        <div className={styles.card_blog_img}>
                        <Image  src={elem.image} width={324} height={221} alt="image bxlog" />
                        </div>
                        <h3 className={styles.card_blog_h3}>{elem.title.slice(0 , 70)}...</h3>
                    </div>
                    </>
                )}
      </Slider>
        </div>
    </div>
  )
}

export default BlogHome