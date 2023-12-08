import cl from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/svg/logo.svg';
import Burger from '../../assets/svg/ri_menu-line.svg';
import s from './Header.module.scss';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    let scrollTimeout: NodeJS.Timeout;

    const updateScrollDirection = () => {
      const { scrollY } = window;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set a new timeout to reset direction to "up" after 2 seconds
      scrollTimeout = setTimeout(() => {
        setScrollDirection('up');
      }, 2000);
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollDirection = useScrollDirection();

  return (
    <header
      ref={headerRef}
      className={cl(s.header, {
        [s.headerWhite]: true,
        [s.headerHidden]: scrollDirection === 'down',
        [s.headerFixed]: scrollDirection === 'up',
      })}>
      <Link to="/" className={s.logo}>
        <img className={s.logo} src={Logo} alt="Logo" />
      </Link>

      <nav className={cl(s.nav, { [s.navProfile]: false })}>
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
