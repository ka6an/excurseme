import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import ROUTES from '../../../router-constants/app.routes';
import globalStyles from '../../../components/styles.css';
import styles from './status-bar.css';

import Button from '../../../components/form-components/custom-button/custom-button';

const StatusBar = props => {
  const {
    activeAmount,
    unpublishedAmount,
    draftAmount,
    rejectedAmount,
    pendingAmount
  } = props;
  return (
    <nav className={styles['nav']}>
      <ul className={`${globalStyles['tabs']} ${styles['nav-tabs']}`}>
        <li className={globalStyles['tab-item']}>
          <NavLink
            className={globalStyles['tab__link']}
            activeClassName={globalStyles['tab__link--active']}
            to={ROUTES.GUIDE_TOUR_MANAGEMENT.ACTIVE}
          >
            Активные ({activeAmount || '0'})
          </NavLink>
        </li>
        <li className={globalStyles['tab-item']}>
          <NavLink
            className={globalStyles['tab__link']}
            activeClassName={globalStyles['tab__link--active']}
            to={ROUTES.GUIDE_TOUR_MANAGEMENT.UNPUBLISHED}
          >
            Пауза ({unpublishedAmount || '0'})
          </NavLink>
        </li>
        <li className={globalStyles['tab-item']}>
          <NavLink
            className={globalStyles['tab__link']}
            activeClassName={globalStyles['tab__link--active']}
            to={ROUTES.GUIDE_TOUR_MANAGEMENT.DRAFT}
          >
            На редактировании ({draftAmount || '0'})
          </NavLink>
        </li>
        <li className={globalStyles['tab-item']}>
          <NavLink
            className={globalStyles['tab__link']}
            activeClassName={globalStyles['tab__link--active']}
            to={ROUTES.GUIDE_TOUR_MANAGEMENT.REJECTED}
          >
            Требует доработки ({rejectedAmount || '0'})
          </NavLink>
        </li>
        <li className={globalStyles['tab-item']}>
          <NavLink
            className={globalStyles['tab__link']}
            activeClassName={globalStyles['tab__link--active']}
            to={ROUTES.GUIDE_TOUR_MANAGEMENT.PENDING}
          >
            На проверке ({pendingAmount || '0'})
          </NavLink>
        </li>
      </ul>
      <Link
        to={`${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}`}
      >
        <Button className={styles['nav__btn']} isActive={true} secondary={true}>
          Создать экскурсию
        </Button>
      </Link>
    </nav>
  );
};

export default StatusBar;
