import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import DropDown from "./dropdown/index";
import { useTranslations } from "next-intl";
import { GetServerSidePropsContext } from "next";
import { HeaderBottomProps } from "./headerbottom.props";
const HeaderBottom = ({ navItems }: HeaderBottomProps) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className={styles.headerBottom}>
      <DropDown />
      {navItems.map((item) => (
        <button
          key={item.route}
          className={styles.headerBottomButton}
          onClick={() => router.push(`${locale}/${item.route}`)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default HeaderBottom;

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const messages = require(`../../../../public/locales/${locale}.json`);
  return {
    props: {
      messages,
    },
  };
}
