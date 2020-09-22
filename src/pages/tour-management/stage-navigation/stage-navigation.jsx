import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from '../../../components/styles.css';
import ROUTES from '../../../router-constants/app.routes';

const StageNavigation = props => {
  const {} = props;
  const location = useLocation();
  return (
    <ul className={`${styles['tabs']} ${styles['tabs-4']}`}>
      {location.pathname !==
      `${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}` ? (
        <>
          <li className={styles['tab-item']}>
            <NavLink
              to={ROUTES.TOUR_MANAGEMENT.EDITING.DESCRIPTION}
              className={styles['tab__link']}
              activeClassName={styles['tab__link--active']}
            >
              Описание
            </NavLink>
          </li>
          <li className={styles['tab-item']}>
            <NavLink
              to={ROUTES.TOUR_MANAGEMENT.EDITING.DETAILS}
              className={styles['tab__link']}
              activeClassName={styles['tab__link--active']}
            >
              Детали
            </NavLink>
          </li>
          <li className={styles['tab-item']}>
            <NavLink
              to={ROUTES.TOUR_MANAGEMENT.EDITING.PHOTOS}
              className={styles['tab__link']}
              activeClassName={styles['tab__link--active']}
            >
              Фото
            </NavLink>
          </li>
          <li className={styles['tab-item']}>
            <NavLink
              to={ROUTES.TOUR_MANAGEMENT.EDITING.ROUTE}
              className={styles['tab__link']}
              activeClassName={styles['tab__link--active']}
            >
              Маршрут
            </NavLink>
          </li>
        </>
      ) : (
        <li className={styles['tab-item']}>
          <NavLink
            to={`${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}`}
            className={styles['tab__link']}
            activeClassName={styles['tab__link--active']}
          >
            Описание
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default StageNavigation;
