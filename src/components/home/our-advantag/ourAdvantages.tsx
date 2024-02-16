import { useTranslations } from "next-intl"
import OurAdvenges1 from "../../../../public/home/our-advanteges/our-advanges1.svg"
import OurAdvenges2 from "../../../../public/home/our-advanteges/our-advanges2.svg"
import OurAdvenges3 from "../../../../public/home/our-advanteges/our-advanges3.svg"
import OurAdvenges4 from "../../../../public/home/our-advanteges/our-advanges4.svg"
import OurAdvenges5 from "../../../../public/home/our-advanteges/our-advanges5.svg"
import OurAdvenges6 from "../../../../public/home/our-advanteges/our-advanges6.svg"
import styles from "./style.module.css"
import Image from "next/image"
const OurAdvantages = () => {
    const t = useTranslations('Home')
  return (
    <div className="container">
        <div className={styles.our_advanges}>
            <h2>{t("OurAdvanges.0")}</h2>
        <div className={styles.our_advanges_cards}>
        <div className={styles.our_advanges_card}>
                <Image src={OurAdvenges1} alt="Our advanges icon"/>
                <span>{t("OurAdvanges.1")}</span>
            </div>
            <div className={styles.our_advanges_card}>
                <Image src={OurAdvenges2} alt="Our advanges icon"/>
                <span>{t("OurAdvanges.2")}</span>
            </div>
            <div className={styles.our_advanges_card}>
                <Image src={OurAdvenges3} alt="Our advanges icon"/>
                <span>{t("OurAdvanges.3")}</span>
            </div>
            <div className={styles.our_advanges_card}>
                <Image src={OurAdvenges4} alt="Our advanges icon"/>
                <span>{t("OurAdvanges.4")}</span>
            </div>
            <div className={styles.our_advanges_card}>
                <Image src={OurAdvenges5} alt="Our advanges icon"/>
                <span>{t("OurAdvanges.5")}</span>
            </div>
            <div className={styles.our_advanges_card}>
                <Image src={OurAdvenges6} alt="Our advanges icon"/>
                <span>{t("OurAdvanges.6")}</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OurAdvantages