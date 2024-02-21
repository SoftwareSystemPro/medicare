import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import styles from "./style.module.css";
import { ContentProps } from "../Content/content.props";

function ProductSlider({dataProduct}:ContentProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<typeof Swiper | any>(null);
  
  const slides = [
    `${dataProduct?.image1?.url}`,
    `${dataProduct?.image2?.url}`,
    `${dataProduct?.image3?.url}`,
    `${dataProduct?.image4?.url}`,
  ];

  return (
    <div className={styles.App}>
      <section className={styles.slider}>
        <div className={styles.slider__flex}>
          <div className={styles.slider__images}>
            <Swiper
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              mousewheel={true}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
              }}
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "horizontal",
                },
              }}
              className={styles.swiper_container2}
              modules={[Navigation, Thumbs, Mousewheel]}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.slider__image}>
                    <img src={slide} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.slider__col}>
            <div className={styles.slider__thumbs}>
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="horizontal"
                spaceBetween={24}
                slidesPerView={4}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev",
                }}
                className={styles.swiper_container1}
                breakpoints={{
                  768: {
                    direction: "horizontal",
                  },
                }}
                modules={[Navigation, Thumbs]}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.slider__image}>
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductSlider;
