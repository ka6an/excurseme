import React from 'react';
import styles from './menu.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const toggleMenu = (e) => {
    e.preventDefault();

    let menu = e.currentTarget.parentNode;

    menu.classList.toggle('header-menu--open');
  }

  return (
    <div className={styles['header-menu']}>
      <button
        className={styles['header-menu__btn']}
        onClick={toggleMenu}
      >
        <span className={styles['header-menu__btn-span']}></span>
        <span className={styles['header-menu__btn-span']}></span>
        <span className={styles['header-menu__btn-span']}></span>
      </button>
      <div
        className={styles['header-menu__overlay']}
        onClick={toggleMenu}
      />
      <ul className={styles['header-menu-list']}>
        <li className={styles['header-menu-item']}>
          <NavLink
            exact
            to={'#0'}
            className={styles['header-menu__link']}
          >
            Новости
          </NavLink>
        </li>
        <li className={styles['header-menu-item']}>
          <NavLink
            exact
            to={'#0'}
            className={styles['header-menu__link']}
          >
            Блог
          </NavLink>
        </li>
      </ul>
    </div>
  )
};

export default Menu;