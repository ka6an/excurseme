import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { SkeletonHOC } from '../../../../utils';
import Rating from '../../../rating/rating.component';
import CustomIcon from '../../../custom-icon/custom-icon.component';

import styles from './tour-info.css';

const TourInfo = props => {
  const {
    duration,
    amountOfComments,
    participants,
    language,
    score,
    minAge
  } = props;
  return (
    <div className={styles['info-wrap']}>
      <div className={`${styles['info']} ${styles['info--big']}`}>
        <Rating
          className={styles['info-rating']}
          score={score || <SkeletonHOC width={30} />}
          type='transparent'
        />
        <div className={styles['info-item']}>
          <CustomIcon className={styles['info-item__icon']} iconName={'clock'} />
          <p className={styles['info__text']}>
            {duration || <SkeletonHOC width={65} />}
          </p>
        </div>
        <div className={styles['info-item']}>
          <CustomIcon className={styles['info-item__icon']} iconName={'person'} />
          <p className={styles['info__text']}>
            {participants || <SkeletonHOC width={25} />}
          </p>
        </div>
        <div className={styles['info-item']}>
          <p className={styles['info__age']}>
            {minAge || <SkeletonHOC width={10} />}
          </p>
        </div>
        <div className={styles['info-item']}>
          <CustomIcon className={styles['info-item__icon']} iconName={'lang'} />
          <p
            className={`${styles['info__text']} ${styles['info__text--upper']}`}
          >
            {language || <SkeletonHOC width={35} />}
          </p>
        </div>
      </div>
      <Link
        to={`#reviews`}
        className={`${styles['info-messages']} ${styles['info-messages--big']}`}
        smooth
      >
        <CustomIcon className={styles['info-messages__icon']} iconName={'message'} />
        <span className={styles['info-messages__text']} >{`Отзывы (${amountOfComments || '0'})`}</span>
      </Link>
    </div>
  );
};

export default TourInfo;
