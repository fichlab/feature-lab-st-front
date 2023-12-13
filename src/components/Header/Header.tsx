import cl from 'classnames';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { CompetenciesMenu } from './CompetenciesMenu/CompetenciesMenu';
import { HamburgerBtn } from './HamburgerBtn/HamburgerBtn';
import s from './Header.module.scss';
import Arrow from './svg/Icon-arrow.svg?svgr';

export const Header: React.FC = () => {
  // const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isCompetenciesMenuVisible, setCompetenciesMenuVisible] = useState(false);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  const handleCompetenciesMenuBtnClick = () => {
    setCompetenciesMenuVisible(!isCompetenciesMenuVisible);
  };

  const handleBurgerBtnClick = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  return (
    <header
      // ref={headerRef}
      className={cl(s.header, {
        [s.header_hidden]: !isNavMobileOpen && scrollDirection === 'down',
      })}>
      <div
        className={cl(s.content, {
          [s.content_bg_white]: currentScrollY > 1,
        })}>
        <Link to="/" className={s.logo}>
          <img className={s.logo} src={Logo} alt="Logo" />
        </Link>
        <nav className={cl(s.nav, { [s.navProfile]: false, [s.navMobileOpen]: isNavMobileOpen })}>
          <ul className={cl(s.list)}>
            <li
              className={cl(s.listItem, s.listItemSubMenu)}
              onMouseLeave={() => setCompetenciesMenuVisible(false)}>
              <button
                type="button"
                onClick={handleCompetenciesMenuBtnClick}
                className={cl(s.btnSubmenuOpen, {
                  [s.linkActive]: isCompetenciesMenuVisible,
                })}>
                Компетенции
                <Arrow
                  className={cl(s.arrow, {
                    [s.arrow_rotate]: isCompetenciesMenuVisible,
                  })}
                />
              </button>
              <CompetenciesMenu isVisible={isCompetenciesMenuVisible} />
            </li>
            <li className={cl(s.listItem)}>
              <NavLink
                to="/some-route1"
                className={({ isActive }) => (isActive ? s.linkActive : '')}>
                Лаборатория
              </NavLink>
            </li>
            <li className={cl(s.listItem)}>
              <NavLink
                to="/some-route2"
                className={({ isActive }) => (isActive ? s.linkActive : '')}>
                Продукты
              </NavLink>
            </li>
            <li className={cl(s.listItem)}>
              <NavLink
                to="/some-route3"
                className={({ isActive }) => (isActive ? s.linkActive : '')}>
                Контакты
              </NavLink>
            </li>
            <li className={cl(s.listItem)}>
              <NavLink
                to="/some-route4"
                className={({ isActive }) => (isActive ? s.linkActive : '')}>
                Личный кабинет
              </NavLink>
            </li>
          </ul>
        </nav>

        <HamburgerBtn onClick={handleBurgerBtnClick} />
      </div>
    </header>
  );
};
