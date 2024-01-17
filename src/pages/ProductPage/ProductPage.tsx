import { FC } from 'react';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ResultPreviewSection } from '../../components/ResultPreviewSection/ResultPreviewSection';

export const ProductPage: FC = () => {
  return (
    <>
      <PageTitle pageTitle="Какой-то ёёёйййй" subTitle="Какой-то текст под заголовком" />

      <LeadSection />

      {/* Секция - Этабы работы */}

      <ResultPreviewSection />
    </>
  );
};
