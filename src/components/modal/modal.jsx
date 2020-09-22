import React, { useState, useEffect } from 'react';

import styles from './modal.css';

const Modal = props => {
  const { isOpen, onShow, toggle, children, className } = props;

  const [modalStyle, changeModalStyle] = useState(
    styles['modal-background_closed']
  );

  const [openUpdateCount, incrementOpenUpdateCount] = useState(0);

  const closeModal = () => {
    // TODO: explain what is openUpdateCount
    // if (openUpdateCount > 1) {
      changeModalStyle(styles['modal-background_closed']);
    // }
  };

  useEffect(() => {
    incrementOpenUpdateCount(openUpdateCount + 1);
    const currentScroll = window.scrollY;
    const noScroll = () => {
      window.scrollTo(0, currentScroll);
    };

    const closeModalByEsc = e => {
      if (e.keyCode == 27) {
        closeModal();
        toggle();
      }
    };

    if (isOpen) {
      onShow();
      changeModalStyle(styles['modal-background_shown']);
      window.addEventListener('scroll', noScroll);
      document.addEventListener('keyup', closeModalByEsc);
    } else {
      closeModal();
    }

    return () => {
      window.removeEventListener('scroll', noScroll);
      document.removeEventListener('keyup', closeModalByEsc);
      changeModalStyle(styles['modal-background_closed']);
    };
  }, [isOpen]);

  const onBackgroundClick = e => {
    e.preventDefault();
    if ([...e.target.classList].includes('modal-background_shown')) {
      toggle();
    }
  };

  return (
    <div
      className={`${styles['modal-background']} ${modalStyle}`}
      style={{
        top: window.scrollY
      }}
      onClick={onBackgroundClick}
    >
      <div className={styles['modal-container']}>
        <div className={styles['modal-exit-button']} onClick={toggle}>
          &times;
        </div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
