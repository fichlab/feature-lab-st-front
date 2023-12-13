import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Competitions.module.scss';

export interface ICompetitionsProps {
  className?: string;
  isVisible: boolean;
}

export const Competitions: FC<ICompetitionsProps> = ({ className = '', isVisible }) => {
  return (
    <div
      className={cl(
        s.competitions,
        {
          [s.competitions_visible]: isVisible,
        },
        className,
      )}>
      <ul className={s.competitions__list}>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Machine learning
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Web-разработка
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Управление данными
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Разработка приложений
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Мобильная разработка
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Blockchain
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Gamedev
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            ML&amp;AI
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            Данные
          </NavLink>
        </li>
        <li className={s.competitions__item}>
          <NavLink to="/" className={s.competitions__link}>
            КХД
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
