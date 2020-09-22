import React from 'react';

import styles from './photo-item.css';

const PhotoItem = props => {
  const { imgUrl, imgId, name } = props;
  return (
    <div className={styles['photo-item']}>
      <img src={imgUrl} alt={name} className={styles['photo__image']} />
      <div className={styles['photo-radio']}>
        <input
          type='radio'
          id={`cover-${imgId}`}
          name='photo-cover'
          className={styles['photo-radio__input']}
        />
        <label
          htmlFor={`cover-${imgId}`}
          className={styles['photo-radio__label']}
        >
          Обложка
        </label>
      </div>
    </div>
  );
};

export default PhotoItem;
