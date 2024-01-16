import { FC } from 'react';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';

export const CompetencePage: FC = () => {
  return (
    <>
      <PageTitle pageTitle="Gamedev" subTitle="Расшифровка аббревиатуры" />

      <LeadSection />

      {/* слайдер команды */}

      <ProductsSection title="Портфолио" />
    </>
  );
};
