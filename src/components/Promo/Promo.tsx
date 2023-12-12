import cl from 'classnames';
import { Button } from '../ui/Button/Button';
import s from './Promo.module.scss';

export interface IPromoProps {
  className?: string;
}

export const Promo = ({ className = '' }: IPromoProps): JSX.Element => {
  return (
    <section aria-label="Promo" className={cl(s.promo, className)}>
      <div className={s.bg_blue} />

      <h1 className={s.title}>фичлаб</h1>
      <div className={s.divider} />

      <div className={s.headlines}>
        <p className={s.headline}>Разрабатываем IT&#8209;проекты любой сложности</p>
        <p className={s.headline}>Обучаем специалистов</p>
        <p className={s.headline}>Создаём продукты</p>
      </div>
      <Button className={s.promo__btn} theme="promo" text="Свяжитесь с&nbsp;нами" />
    </section>
  );
};
