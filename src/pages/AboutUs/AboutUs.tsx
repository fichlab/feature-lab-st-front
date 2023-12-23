import { FC } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { ROUTE_COMPETENCIES } from '../../constants/constants';
import s from './AboutUs.module.scss';
import { BottomGridSection } from './BottomGridSection/BottomGridSection';
import { TopGridSection } from './TopGridSection/TopGridSection';

export const AboutUs: FC = () => {
  const isCompetenciesDefaultPage = useMatch(ROUTE_COMPETENCIES);

  if (isCompetenciesDefaultPage) {
    return (
      <>
        <h1 className={s.pageTitle}>О нас</h1>
        <div className={s.subTitleWrapper}>
          <p className={s.subTitle}>Наши компетенции</p>
        </div>

        <TopGridSection />
        <BottomGridSection />
      </>
    );
  }
  return <Outlet />;
};
