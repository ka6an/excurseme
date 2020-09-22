import React from 'react';
import styles from './extended-header.css';
import Logo from '../../logo/logo';
import NavItem from '../header-nav-item/header-nav-item';
import Balance from '../balance/balance';
import UserAvatar from '../../user-avatar/user-avatar';
import CustomIcon from '../../custom-icon/custom-icon.component';
import Rating from '../../rating/rating.component';
import Menu from '../menu/menu.component';


const ExtendedHeader = () => {
  return (
    <div className={styles['header']}>
      <Menu />
      <Logo />
      <ul className={styles['header-nav']}>
      <li className={styles['nav-item']}>
        <NavItem linkTo="#0">Экскурсии</NavItem>
      </li>
      <li className={styles['nav-item']}>
        <NavItem linkTo="#0">Заказы</NavItem>
      </li>
      <li className={`${styles['nav-item']} ${styles['desktop']}`}>
        <NavItem linkTo="#0">
          <Balance amount={42500} />
        </NavItem>
      </li>
      <li className={`${styles['nav-item']} ${styles['nav-item-chat']}`}>
        <NavItem linkTo="#0">
          <CustomIcon className={styles['nav-item__icon']} iconName='message' />
        </NavItem>
      </li>
      </ul>
      <div className={styles['header-right']}>
        <Rating
          className={styles['header-rating']}
          score={'5.0'}
          label='Рейтинг:'
          type='big'
        />
        <UserAvatar />
        <div className={`${styles['header-logout']} ${styles['desktop']}`}>
          <CustomIcon className={styles['nav-item__icon']} iconName='logout' />
        </div>
      </div>
    </div>
  );
};

export default ExtendedHeader;