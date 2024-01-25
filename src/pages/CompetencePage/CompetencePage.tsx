import { FC } from 'react';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import s from './CompetencePage.module.scss';

export const CompetencePage: FC = () => {
  return (
    <>
      <PageTitle className={s.pageTitle} pageTitle="Gamedev" subTitle="Расшифровка аббревиатуры" />

      <LeadSection className={s.pageSection} />

      {/* слайдер команды */}

      <ProductsSection className={s.pageSection} title="Портфолио" />
    </>
  );
};
