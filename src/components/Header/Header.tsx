import cl from 'classnames';
import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { SubMenu } from './SubMenu/SubMenu';
import { HamburgerBtn } from './HamburgerBtn/HamburgerBtn';
import s from './Header.module.scss';
import Arrow from './svg/Icon-arrow.svg?svgr';

export const Header: React.FC = () => {
  // const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isCompetenciesMenuVisible, setCompetenciesMenuVisible] = useState(false);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCompetenciesLinkBtnActive = () => {
    switch (location.pathname) {
      case '/about-us':
        return true;
      case '/gamedev': // example
        return true;
      case '/gamedev1': // example
        return true;
      case '/gamedev2': // example
        return true;
      case '/gamedev3': // example
        return true;
      default:
        return false;
    }
  };

  const handleCompetenciesBtnClick = () => {
    // On mobile, a double tap is needed to navigate to /about-us.
    // The first tap is the same as a hover on descktop; it will do nothing but open the sub-menu.
    // The second tap will navigate to /about-us.
    if (window.innerWidth > 768 || isCompetenciesMenuVisible) {
      navigate('/about-us');
    }
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
          <img title="Вернуться на главную" className={s.logo} src={Logo} alt="Logo" />
        </Link>
        <nav className={cl(s.nav, { [s.navProfile]: false, [s.navMobileOpen]: isNavMobileOpen })}>
          <ul className={cl(s.list)}>
            <li className={cl(s.listItem, s.linkToMainPage)}>
              <NavLink to="/" className={({ isActive }) => (isActive ? s.linkActive : '')}>
                Главная
              </NavLink>
            </li>

            <li
              className={cl(s.listItem, s.listItemSubMenu)}
              onMouseEnter={() => setCompetenciesMenuVisible(true)}
              onMouseLeave={() => setCompetenciesMenuVisible(false)}>
              <button
                type="button"
                onClick={handleCompetenciesBtnClick}
                className={cl(s.btnSubmenuOpen, {
                  [s.linkActive]: isCompetenciesLinkBtnActive(),
                })}>
                Компетенции
                <Arrow
                  className={cl(s.arrow, {
                    [s.arrow_rotate]: isCompetenciesMenuVisible,
                  })}
                />
              </button>
              <SubMenu isVisible={isCompetenciesMenuVisible} />
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
