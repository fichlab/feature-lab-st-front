import cl from 'classnames';
import s from './Promo.module.scss';

export interface IPromoProps {
  className?: string;
}

export const Promo = ({ className = '' }: IPromoProps): JSX.Element => {
  return (
    <section aria-label="Promo" className={cl(s.promo, className)}>
      <h1 className={s.promo__title}>фичлаб</h1>
      <div className={s.promo__divider} />

      <div className={s.promo__bg_blue} />
      <div className={s.headlines}>
        <p className={s.headline}>Разрабатываем IT-проекты любой сложности</p>
        <p className={s.headline}>Обучаем специалистов</p>
        <p className={s.headline}>Создаём продукты</p>
      </div>
      <div className={s.promo__button}>
        <div className={s.promo__ellipse1} />
        <div className={s.promo__ellipse2} />
        <div className={s.promo__text}>
          <div className={s.promo__div2}>Свяжитесь с нами</div>
        </div>
      </div>
    </section>
  );
};
