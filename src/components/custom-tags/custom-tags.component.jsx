import React from 'react';

import styles from './custom-tags.css';

const CustomTags = props => {
  const { tags } = props;
  return (
    <div className={styles['profile-group']}>
      <h2 className={styles['profile-group__label']}>Теги</h2>
      <ul className={styles['tag-list']}>
        {tags.length &&
          tags.map((tag, index) => {
            return (
              <li key={index} className={styles['tag-item']}>
                {tag.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CustomTags;
