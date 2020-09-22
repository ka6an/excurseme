import React from 'react';
import styles from './footer.css';

const Footer = props => {
  const itemsPartOne = [
    'Манифест',
    'Принципы',
    'Города и страны',
    'Благотворительность'
  ];
  const itemsPartTwo = ['Команда', 'Вакансии', 'Партнеры', 'Контакты'];
  const itemsPartThree = ['Пресс-кит', 'Эмблема', 'Сувениры'];
  const itemsPartFour = ['Правила сервиса', 'Пользовательское соглашение'];
  const renderFooterList = items => {
    return (
      items.length &&
      items.map((item, index) => (
        <li key={index + 1} className={styles['footer-item']}>
          <a href='#0' className={styles['footer__link']}>
            {item}
          </a>
        </li>
      ))
    );
  };
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-left']}>
        <div className={styles['footer-logo']}>
          <img src='../../../assets/images/logo.svg' alt='logo' />
        </div>
        <p className={styles['footer__desc']}>©Excurse.me, 2020</p>
      </div>
      <div className={styles['footer-center']}>
        <h4 className={styles['footer__title']}>О нас</h4>
        <div className={styles['footer-center-wrap']}>
          <ul className={styles['footer-list']}>
            {renderFooterList(itemsPartOne)}
          </ul>
          <ul className={styles['footer-list']}>
            {renderFooterList(itemsPartTwo)}
          </ul>
          <ul className={styles['footer-list']}>
            {renderFooterList(itemsPartThree)}
            <li className={styles['footer-item']}>
              <a
                href='#0'
                className={`${styles['footer__link']} ${styles['footer__link--fill']}`}
              >
                Стать гидом. Стать лучше
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['footer-right']}>
        <h4 className={styles['footer__title']}>Помощь</h4>
        <ul className={styles['footer-list']}>
          {renderFooterList(itemsPartFour)}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
