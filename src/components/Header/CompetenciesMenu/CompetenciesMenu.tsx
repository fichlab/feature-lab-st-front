import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './CompetenciesMenu.module.scss';

export interface ICompetenciesMenuProps {
  className?: string;
  isVisible: boolean;
}

export const CompetenciesMenu: FC<ICompetenciesMenuProps> = ({ className = '', isVisible }) => {
  return (
    <div
      className={cl(
        s.competencies,
        {
          [s.competencies_visible]: isVisible,
        },
        className,
      )}>
      <ul className={s.competencies__list}>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Machine learning
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Web-разработка
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Управление данными
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Разработка приложений
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Мобильная разработка
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Blockchain
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Gamedev
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            ML&amp;AI
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            Данные
          </NavLink>
        </li>
        <li className={s.competencies__item}>
          <NavLink to="/" className={s.competencies__link}>
            КХД
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
