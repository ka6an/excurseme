import React from 'react';
import { Link } from 'react-router-dom';
import { SkeletonHOC } from '../../../utils';
import CustomIcon from '../../../components/custom-icon/custom-icon.component';

import styles from './info-card.css';

const InfoCard = props => {
  const { data } = props;

  return (
    <div className={styles['card']}>
      <div className={styles['card-header']}>
        {data.preview_url ? (
          <img
            src={data.preview_url}
            alt='Photo'
            className={styles['card__img']}
          ></img>
        ) : (
          <SkeletonHOC width={300} height={160} />
        )}
      </div>
      <div className={styles['card-body']}>
        <p className={styles['card__title']}>
          {
            data.status.value === 'active' && (
              <span>
                Проведено: {data.conducted_counter}
              </span>
            )
          }
          {
            (data.status.value === 'unpublished' || data.status.value === 'draft') && (
              <span className={styles['card__title-span--gray']}>
                {data.status.label}
              </span>
            )
          }
          {
            (data.status.value === 'rejected' || data.status.value === 'pending') && (
              <span className={styles['card__title-span--red']}>
                {data.status.label}
              </span>
            )
          }
          <span className={styles['card__title-span']}>
            № {data.id}
          </span>
        </p>
        <Link
          to="#0"
          className={styles['card__name']}
        >
          {data.name || <SkeletonHOC count={2} />}
        </Link>
        <div className={styles['card-info-wrap']}>
          <div className={styles['card-info']}>
            <div className={styles['card-info-item']}>
              <CustomIcon className={styles['card-info__icon']} iconName='clock' />
              <p className={styles['card-info__text']}>
                {data.duration || <SkeletonHOC width={30} />}
              </p>
            </div>
            <div className={styles['card-info-item']}>
              <CustomIcon className={styles['card-info__icon']} iconName='person' />
              <p className={styles['card-info__text']}>
                {data.participants || <SkeletonHOC width={30} />}
              </p>
            </div>
          </div>
        </div>
      </div>
      {data.price && (
        <div className={styles['card-footer']}>
          <div className={styles['card-item__price']}>
            <CustomIcon className={styles['card-item__price-icon']} iconName='ticket' />
            {data.price ? <span>{data.price} ₽</span> : <span>нет цены</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
