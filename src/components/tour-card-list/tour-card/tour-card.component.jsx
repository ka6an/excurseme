import React from 'react';
import { Link } from 'react-router-dom';
import { SkeletonHOC } from '../../../utils';

import ROUTES from '../../../router-constants/app.routes';

import Rating from '../../../components/rating/rating.component';
import CustomIcon from '../../custom-icon/custom-icon.component';

import styles from './tour-card.css';

const TourCard = props => {
  const {
    tourId,
    guideId,
    ratingScore,
    amountOfCompleteExcursions,
    title,
    duration,
    participants,
    reviewsTotal,
    price,
    previewUrl,
    fetchSelectedGuideTour,
    fetchSelectedGuideTourReviews
  } = props;

  const selectAndFetchTourWithReviews = (guideId, tourId) => () => {
    fetchSelectedGuideTour(guideId, tourId);
    fetchSelectedGuideTourReviews(guideId, tourId);
  };

  return (
    <div className={styles['card']}>
      <div className={styles['card-header']}>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt='Photo'
            className={styles['card__img']}
          ></img>
        ) : (
          <SkeletonHOC width={300} height={160} />
        )}
        <Rating className={styles['card-rating']} score={ratingScore} />
      </div>
      <div className={styles['card-body']}>
        <p className={styles['card__title']}>
          Проведено {amountOfCompleteExcursions || <SkeletonHOC width={30} />}{' '}
          экскурсии
        </p>
        <Link
          to={`${ROUTES.GUIDE.PROFILE}/${guideId}${ROUTES.GUIDE.TOURS}/${tourId}`}
          className={styles['card__name']}
          onClick={selectAndFetchTourWithReviews(guideId, tourId)}
        >
          {title || <SkeletonHOC count={2} />}
        </Link>
        <div className={styles['card-info-wrap']}>
          <div className={styles['card-info']}>
            <div className={styles['card-info-item']}>
              <CustomIcon className={styles['card-info__icon']} iconName='clock' />
              <p className={styles['card-info__text']}>
                {duration || <SkeletonHOC width={30} />}
              </p>
            </div>
            <div className={styles['card-info-item']}>
              <CustomIcon className={styles['card-info__icon']} iconName='person' />
              <p className={styles['card-info__text']}>
                {participants || <SkeletonHOC width={30} />}
              </p>
            </div>
          </div>
          <Link
            to={`${ROUTES.GUIDE.PROFILE}/${guideId}${ROUTES.GUIDE.TOURS}/${tourId}/#reviews`}
            className={styles['card-messages']}
            onClick={selectAndFetchTourWithReviews(guideId, tourId)}
          >
            <CustomIcon className={styles['card-messages__icon']} iconName='message-fill' />
            <span>{reviewsTotal || <SkeletonHOC width={15} />}</span>
          </Link>
        </div>
      </div>
      <div>
        <div className={styles['card-item__price']}>
          <CustomIcon className={styles['card-item__price-icon']} iconName='ticket' />
          {price ? <span>{price} ₽</span> : <span>нет цены</span>}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
