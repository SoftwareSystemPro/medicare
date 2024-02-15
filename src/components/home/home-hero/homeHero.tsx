import { useTranslations } from 'next-intl';
import React from 'react'

const HomeHero = () => {
    const t = useTranslations('Home');
  return (
    <div>{t('')}</div>
  )
}

export default HomeHero