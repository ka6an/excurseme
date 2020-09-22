import React, { useState, useEffect } from 'react';
import TourCardList from '../tour-card-list/tour-card-list.component';

import styles from './calendar.css';
import groupStyles from '../../pages/profile/profile-body/profile-content/profile-bio-item/profile-bio-item.css';

const formatDate = date => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return day + '.' + month + '.' + year;
};

const Calendar = props => {
  const { guideId, availableDates, getGuideSchedule, getGuideToursByDate, guideToursByDate } = props;
  const monthLiteral = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];
  const daysLiteral = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс'
  ];

  let days = [];
  let unavailable = [];

  let curDate = new Date();
  let curMonth = new Date().getMonth();
  let curYear = new Date().getFullYear();

  const [month, setCurrentMonth] = useState(curDate.getMonth());
  const [year, setCurrentYear] = useState(curDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(formatDate(curDate));

  useEffect(() => {
    if (guideId) {
      getGuideSchedule(
        guideId,
        formatDate(firstDayOfCurrentMonth),
        formatDate(lastDateOfCurrentMonth)
      );
    }
  }, [guideId, year, month, firstDayOfCurrentMonth, lastDateOfCurrentMonth]);

  useEffect(() => {
    if (guideId) {
      getGuideToursByDate(guideId, selectedDay);
    }
  }, [guideId, selectedDay]);

  let firstDayOfCurrentMonth = new Date(year, month, 1);
  let firstDayOfCurrentMonthDiff =
    firstDayOfCurrentMonth.getDay() === 0 ? 7 : firstDayOfCurrentMonth.getDay();
  let lastDateOfCurrentMonth = new Date(year, month + 1, 0);
  let lastDateOfCurrentMonthDiff = lastDateOfCurrentMonth.getDate();

  for (let i = 0, j = 0; i < 42; i++) {
    if (
      i + 1 < firstDayOfCurrentMonthDiff ||
      i + 1 > lastDateOfCurrentMonthDiff - 1 + firstDayOfCurrentMonthDiff
    ) {
      days.push({
        type: 'hidden'
      });
    } else {
      days.push({
        type: 'shown',
        index: ++j
      });

      if (year === curYear && month === curMonth &&
        i - 1 - firstDayOfCurrentMonthDiff === curDate.getDate()) {
        days[j + 1].active = true;
      }

      if (availableDates && availableDates.length) {
        availableDates.map((day, idx) => {
          let dateArr = day.date.split('.');
          let date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

          if (
            date.getFullYear() === year &&
            date.getMonth() === month &&
            date.getDate() === days[j + 1].index
          ) {
            days[j + 1].date = date;
            days[j + 1].tours_count = day.tours_count;
          }
        });
      }
    }
  }

  const goToNextMonth = e => {
    e.preventDefault();

    if (month < 11) {
      setCurrentMonth(month + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(year + 1);
    }

    removeActiveDay();
  };

  const goToPrevMonth = e => {
    e.preventDefault();

    if (month === 0) {
      setCurrentMonth(11);
      setCurrentYear(year - 1);
    } else {
      setCurrentMonth(month - 1);
    }

    removeActiveDay();
  };

  const selectDay = (e, day) => {
    e.preventDefault();

    let $activeDay = document.getElementsByClassName(styles['calendar-day--active'])[0];
    let $selectedDay = e.currentTarget;

    $activeDay && $activeDay.classList.remove(styles['calendar-day--active']);
    $selectedDay.classList.add(styles['calendar-day--active']);

    if (day && day.date) {
      setSelectedDay(formatDate(day.date));
    }
  };

  const removeActiveDay = () => {
    let $activeDay = document.getElementsByClassName(styles['calendar-day--active'])[0];

    $activeDay && $activeDay.classList.remove(styles['calendar-day--active']);
  };

  return (
    <>
      <div className={groupStyles['group']}>
        <h2 className={groupStyles['group__label']}>Календарь экскурсий</h2>
        <div className={`${styles['calendar']} ${styles['calendar--medium']}`}>
          <div className={styles['calendar-header']}>
            <button
              className={`${styles['calendar__arrow']} ${styles['calendar__arrow-prev']}`}
              onClick={goToPrevMonth}
            ></button>
            <p
              className={styles['calendar-title']}
            >{`${monthLiteral[month]} ${year}`}</p>
            <button
              className={`${styles['calendar__arrow']} ${styles['calendar__arrow-next']}`}
              onClick={goToNextMonth}
            ></button>
          </div>
          <div className={styles['calendar-body']}>
            <div className={styles['calendar-weeks']}>
              {daysLiteral.map((day, index) => {
                return (
                  <p key={index} className={styles['calendar-weeks__name']}>
                    {day}
                  </p>
                );
              })}
            </div>
            <div className={styles['calendar-days']}>
              {days.map((day, index) => {
                if (day.type === 'hidden') {
                  return (
                    <div
                      key={index}
                      className={`${styles['calendar-day']} ${styles['calendar-day--empty']}`}
                    ></div>
                  );
                } else if (!day.tours_count) {
                  return (
                    <div
                      key={index}
                      className={`${styles['calendar-day']} ${styles['calendar-day--disabled']} ${day.active ? styles['calendar-day--active'] : ''}`}
                    >
                      <p className={styles['calendar-day__text']}>{day.index}</p>
                    </div>
                  );
                } else if (day.active) {
                  return (
                    <div
                      key={index}
                      className={`${styles['calendar-day']} ${styles['calendar-day--active']}`}
                      onClick={(e) => selectDay(e, day)}
                    >
                      <p className={styles['calendar-day__text']}>{day.index}</p>
                      <p className={styles['calendar-day__amount']}>
                        {day.tours_count}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={styles['calendar-day']}
                      onClick={(e) => selectDay(e, day)}
                    >
                      <p className={styles['calendar-day__text']}>{day.index}</p>
                      <p className={styles['calendar-day__amount']}>
                        {day.tours_count}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <TourCardList
        tourList={guideToursByDate && guideToursByDate.tours}
        iconName='empty-tours'
        message='Экскурсий на выбранную дату нет'
      />
    </>
  );
};

export default Calendar;
