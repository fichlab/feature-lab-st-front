import { FC } from 'react';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';

const Home: FC = () => {
  return (
    <>
      <PromoSection />
      <CompetenciesSection />
      <LabSection />
    </>
  );
};

export default Home;
