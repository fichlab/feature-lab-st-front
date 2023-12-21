import { FC } from 'react';
import cl from 'classnames';
import s from './AboutUs.module.scss';

const AboutUs: FC = () => {
  return (
    <>
      <h1 className={s.pageTitle}>О нас</h1>
      <div className={s.subTitleWrapper}>
        <p className={s.subTitle}>Наши компетенции</p>
      </div>
    </>
  );
};

export default AboutUs;
