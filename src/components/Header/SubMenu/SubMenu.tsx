import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './SubMenu.module.scss';

export interface ISubMenuProps {
  className?: string;
  isVisible: boolean;
}

export const SubMenu: FC<ISubMenuProps> = ({ className = '', isVisible }) => {
  return (
    <div
      className={cl(
        s.submenu,
        {
          [s.submenu_visible]: isVisible,
        },
        className,
      )}>
      <ul className={s.submenuList}>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Machine learning
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Web-разработка
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Управление данными
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Разработка приложений
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Мобильная разработка
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Blockchain
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Gamedev
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            ML&amp;AI
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Данные
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            КХД
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
