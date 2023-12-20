import { FC } from 'react';
import s from './AboutUs.module.scss';

const AboutUs: FC = () => {
  return (
    <>
      <h1 className={s.pageTitle}>О нас</h1>
      <div className={s.subTitle}>
        <div className={s.divider} />
        Наши компетенции
      </div>

      <section className={s.pageTitle} />
    </>
  );
};

export default AboutUs;
