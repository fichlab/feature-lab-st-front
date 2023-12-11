import cl from 'classnames';
import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import Burger from '../../assets/svg/ri_menu-line.svg';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import s from './Header.module.scss';
// import { Competitions } from './Competitions/Competitions';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrollDirection, currentScrollY } = useScrollDirection();

  return (
    <header
      ref={headerRef}
      className={cl(s.header, {
        [s.headerWhite]: currentScrollY > 1,
        [s.headerHidden]: scrollDirection === 'down',
      })}>
      <Link to="/" className={s.logo}>
        <img className={s.logo} src={Logo} alt="Logo" />
      </Link>

      <nav className={cl(s.nav, { [s.navProfile]: false })}>
        <ul className={cl(s.list)}>
          <li className={cl(s.listItem)}>
            <button
              type="button"
              onClick={() => console.log('click')}
              className={cl({
                [s.linkActive]: true,
              })}>
              Компетенции
            </button>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route1" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Лаборатория
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route2" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Продукты
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route3" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Контакты
            </NavLink>
          </li>
          <li className={cl(s.listItem)}>
            <NavLink to="/some-route4" className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Личный кабинет
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <Competitions /> */}

      <div className={s.burger}>
        <img className={s.burger} src={Burger} alt="Logo" />
      </div>
    </header>
  );
};
