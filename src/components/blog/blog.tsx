import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { DataCard } from "src/services/fakedata";
import CardCommon from "../common/card/cardCommon";
const BlogComponent = () => {
  const t = useTranslations();
  return (
    <div className={styles.blog}>
      <h2>
        Важность безопасности в медицинской практике: Почему правильный выбор
        перчаток так важен
      </h2>
      <div className={styles.blog_box}>
        <Image
          src={
            "https://www.medischevakhandel.nl/public/data/image/article/9014/24969/large/unigloves-nitril-handschoenen-paars-indigo-100-stuks.jpg"
          }
          width={300}
          height={300}
          alt="Image Blog"
        />
        <p>
          {
            "В сфере медицинской практики безопасность играет решающую роль. Правильный выбор медицинских расходников, включая перчатки, имеет прямое отношение к защите как медицинского персонала, так и пациентов от различных инфекционных и химических рисков. Перчатки являются первым барьером между медицинским работником и потенциально опасными веществами, поэтому важно выбирать их с особой тщательностью.\n\nВо-первых, правильный выбор перчаток помогает предотвратить передачу инфекций и защитить как медицинский персонал, так и пациентов от возможной контаминации. Нестерильные медицинские перчатки обеспечивают надежный барьер для защиты от крови, телесных жидкостей и других потенциально заразных веществ, что является особенно важным в условиях работы с инфекционными заболеваниями.\n\nКроме того, перчатки помогают предотвратить контакт с химическими веществами и другими агрессивными материалами, которые могут нанести вред как медицинскому персоналу, так и пациентам. Правильно подобранные перчатки обеспечивают не только защиту от инфекций, но и сохранность кожи и безопасность в процессе выполнения различных медицинских процедур.\n\nОднако, для обеспечения максимальной эффективности и безопасности, необходимо учитывать не только тип материала перчаток, но и их размер, совместимость с используемыми химическими реактивами и другими факторами, связанными с конкретным видом медицинской практики. Все это подчеркивает важность правильного выбора перчаток в медицинской среде и их роль в обеспечении безопасности и гигиены на рабочем месте."
          }
        </p>
      </div>
      <div className={styles.network}>
        <span>{t("Blog.0")}</span>
        <FacebookIcon sx={{ color: "white", marginLeft: "10px" }} />
        <InstagramIcon sx={{ color: "white", marginLeft: "10px" }} />
        <TelegramIcon sx={{ color: "white", marginLeft: "10px" }} />
      </div>
      <div className={styles.similar}>
        <h2>{t("Blog.1")}</h2>
        <div className={styles.cards}>
          {/* {DataCard.slice(0, 4).map((elem, index) => (
            <CardCommon key={index} cardData={elem} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
