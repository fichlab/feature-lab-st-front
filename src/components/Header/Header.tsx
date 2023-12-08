import cl from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import Burger from '../../assets/svg/ri_menu-line.svg';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={cl(s.header, s.headerWhite)}>
      <Link to="/" className={s.logo}>
        <img className={s.logo} src={Logo} alt="Logo" />
      </Link>

      <nav className={s.nav}>
        <ul className={cl(s.list)}>
          <li className={cl(s.listItem)}>
            <NavLink to="/" className={({ isActive }) => (true ? s.linkActive : '')}>
              Компетенции
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Лаборатория
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Продукты
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Контакты
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Личный кабинет
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={s.burger}>
        <img className={s.burger} src={Burger} alt="Logo" />
      </div>
    </header>
  );
};
