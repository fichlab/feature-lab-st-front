import { FC } from 'react';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';

const Home: FC = () => {
  return (
    <>
      <PromoSection />
      <CompetenciesSection />
      <LabSection />
      <ProductsSection title="Продуктовая разработка" />
    </>
  );
};

export default Home;
