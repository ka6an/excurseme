import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from '../rating/rating.component';
import CustomIcon from '../custom-icon/custom-icon.component';
import styles from './user-avatar.css';

const UserAvatar = () => {
  const toggleActionsList = e => {
    e.preventDefault();

    let actionList = e.currentTarget.parentNode;

    actionList.classList.toggle('header-actions--open');
  };

  return (
    <div className={styles['header-actions']}>
      <div className={styles['header-ava-wrap']} onClick={toggleActionsList}>
        <img
          src={'../../../assets/images/default-avatar.svg'}
          alt='Header Avatar'
        />
      </div>
      <ul className={styles['header-actions-list']}>
        <li className={styles['header-actions-item']}>
          <NavLink exact to={'#0'} className={styles['header-actions__link']}>
            <span className={styles['header-actions-item__text']}>
              <CustomIcon
                className={styles['header-actions-item__text-icon']}
                iconName='balance'
              />
              Баланс
            </span>
            <span>4200</span>
          </NavLink>
        </li>
        <li className={styles['header-actions-item']}>
          <NavLink exact to={'#0'} className={styles['header-actions__link']}>
            <span className={styles['header-actions-item__text']}>
              <CustomIcon
                className={styles['header-actions-item__text-icon']}
                iconName='star-gray'
              />
              Рейтиннг
            </span>
            <Rating
              className={styles['header-actions-rating']}
              score={'5.0'}
              type='transparent'
            />
          </NavLink>
        </li>
        <li className={styles['header-actions-item']}>
          <NavLink exact to={'#0'} className={styles['header-actions__link']}>
            <span className={styles['header-actions-item__text']}>
              <CustomIcon
                className={styles['header-actions-item__text-icon']}
                iconName='logout'
              />
              Выйти
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserAvatar;
