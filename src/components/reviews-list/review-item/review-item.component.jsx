import React from 'react';
import Rating from '../../rating/rating.component';

import styles from './review-item.css';

const ReviewItem = props => {
  const { author, date, rating, text } = props;

  return (
    <div className={styles['review-item']}>
      <div className={styles['review-header']}>
        <div className={styles['review-user']}>
          <div className={styles['review-ava']}>
            <img
              src={author.avatar_url}
              alt={`${author.first_name} ${author.last_name}`}
            />
          </div>
          <div className={styles['review-info']}>
            <p className={styles['review__name']}>
              {author.first_name} {author.last_name}
            </p>
            <p className={styles['review__date']}>{date}</p>
          </div>
        </div>
        <div className={styles['review-rate']}>
          <Rating className={styles['review-rate-rating']} score={rating.value} />
          <p className={styles['review-rate__text']}>{rating.label}</p>
        </div>
      </div>
      <div className={styles['review-content']}>
        <p className={styles['review-content__text']}>{text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
