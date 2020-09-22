import React from 'react';

import styles from './download-mobile.css';

const DownloadMobile = () => {
  return (
    <div className={styles['profile-download']}>
      <p className={styles['profile-download_text']}>
        Закажите экскурсию через приложение
      </p>
      <div className={styles['profile-download-links']}>
        <a href='#0' className={styles['profile-download__link']}>
          <img src='/assets/images/apple.jpg' />
        </a>
        <a href='#0' className={styles['profile-download__link']}>
          <img src='/assets/images/google.jpg' />
        </a>
      </div>
    </div>
  );
};

export default DownloadMobile;
