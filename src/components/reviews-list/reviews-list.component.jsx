import React from 'react';
import ReviewItem from './review-item/review-item.component';

import styles from './reviews-list.css';
import { SkeletonHOC } from '../../utils';

const ReviewsList = props => {
  const { list } = props;

  return (
    <div className={styles['reviews-list']}>
      {list
        ? list.length &&
          list.map((data, index) => {
            return <ReviewItem key={index + 1} {...data} />;
          })
        :
        [1, 2, 3].map((index) => {
          return (
            <div key={index} style={{ marginTop: '10px' }}>
              <SkeletonHOC height={133} />
            </div>
          );
        })
      }
    </div>
  );
};

export default ReviewsList;
