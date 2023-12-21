import { FC } from 'react';
import s from './AboutUs.module.scss';
import { BottomGridSection } from './BottomGridSection/BottomGridSection';
import { TopGridSection } from './TopGridSection/TopGridSection';

export const AboutUs: FC = () => {
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
};
