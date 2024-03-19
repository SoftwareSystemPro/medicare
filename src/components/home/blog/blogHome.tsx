import { useTranslations } from "next-intl"
import styles from "./style.module.css"
import Slider from "react-slick";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_CARD } from "src/services/blogCard.query";
import { CardBlog } from "src/interface/cardBlog.type";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from "next/router";
const BlogHome = () => {
    const {locale} = useRouter();
    const router = useRouter();
    const {loading , error , data} = useQuery(GET_BLOGS_CARD)
    const t = useTranslations('')
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
            <h2>{t('Home.Blog.0')}</h2>
            <Slider {...settings}>
                {data?.blogss?.map((elem:CardBlog,  index:number) =>
                  <div  key={index} className={styles.cardBlog}>
                        <div className={styles.card_blog_img}>
                        <Image key={index}  src={elem.image.url} width={624} height={321} alt="image bxlog" />
                        </div>
                        <h3 className={styles.card_blog_h3}>{locale == 'ru'?  elem.titleRu : locale == 'en'?  elem.titleEn :locale == 'uz'?  elem.titleUz :elem.titleRu}...</h3>
                        <span className={styles.data_button} onClick={()=>router.push(`/blog/${elem?.slug}`)}>{t('Payment.13')} <PlayArrowIcon sx={{color:'rgba(226, 49, 54, 1)' , cursor:'pointer'}}/></span>
                    </div>
                )}
      </Slider>
        </div>
    </div>
  )
}

export default BlogHome