import cl from 'classnames';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import Burger from '../../assets/svg/ri_menu-line.svg';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Competitions } from './Competitions/Competitions';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  // const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isCompetitionsVisible, setCompetitionsVisible] = useState(true);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  const handleCompetitionsButtonClick = () => {
    setCompetitionsVisible(!isCompetitionsVisible);
  };

  const handleBurgerClick = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  return (
    <header
      // ref={headerRef}
      className={cl(s.header, {
        [s.headerWhite]: currentScrollY > 1,
        [s.headerHidden]: scrollDirection === 'down',
      })}>
      <Link to="/" className={s.logo}>
        <img className={s.logo} src={Logo} alt="Logo" />
      </Link>
      <nav className={cl(s.nav, { [s.navProfile]: false, [s.navMobileOpen]: isNavMobileOpen })}>
        <button type="button" onClick={handleBurgerClick} className={cl(s.btnMobileMenuClose)} />

        <ul className={cl(s.list)}>
          <li
            className={cl(s.listItem, s.listItemSubMenu)}
            onMouseLeave={() => setCompetitionsVisible(false)}>
            <button
              type="button"
              onClick={handleCompetitionsButtonClick}
              className={cl(s.btnSubmenuOpen, {
                [s.linkActive]: isCompetitionsVisible,
              })}>
              Компетенции
            </button>
            <Competitions isVisible={isCompetitionsVisible} />
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

      <button type="button" onClick={handleBurgerClick} className={s.burger}>
        <img className={s.burger} src={Burger} alt="Open mobile menu" />
      </button>
    </header>
  );
};
