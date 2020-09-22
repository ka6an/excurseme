import React from 'react';
import { withRouter } from 'react-router-dom';
import { SkeletonHOC } from '../../../utils';
import TourInfo from './tour-info/tour-info.component';
import TourSlider from './tour-slider/tour-slider.component';
import CustomTags from '../../custom-tags/custom-tags.component';
import MarshrouteMap from '../../marshroute-map/marshroute-map.component';
import TourDesc from './tour-desc/tour-desc.component';
import ReviewsList from '../../reviews-list/reviews-list.component';

import styles from './tour-body.css';
import stylesReviews from '../../reviews-list/reviews-list.css';

class TourBody extends React.Component {
  constructor(props) {
    super(props);
    this.reviewsRef = React.createRef();
  }

  componentDidMount() {
    const {
      getSelectedGuideTour,
      getSelectedGuideTourReviews,
      location,
      error
    } = this.props;

    const guideId = location.pathname.split('/')[2];
    const tourId = location.pathname.split('/')[4];

    if (error && error.status === 404) {
    } else {
      getSelectedGuideTour(guideId, tourId);
      getSelectedGuideTourReviews(guideId, tourId);
    }

    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.tourData !== prevProps.tourData) {
      if (location.hash === '#reviews' || location.hash.split('/')[5] === '#reviews') {
        window.scrollTo(0, this.reviewsRef.current.offsetTop);
      }
    }
  }

  render() {
    const { tourData, tourReviews } = this.props;

    const aboutTour = [
      { ['Что включено']: tourData && tourData.includes },
      { ['Как будет проходить']: tourData && tourData.plan },
      { ['Фишки']: tourData && tourData.features },
      { ['Не забыть']: tourData && tourData.keep_in_mind },
      { ['Требования']: tourData && tourData.requirements },
      { ['Правила']: tourData && tourData.policies }
    ];
    return (
      <div>
        <h1 className={styles['title']}>
          {(tourData && tourData.name) || <SkeletonHOC height={56} />}
        </h1>
        <TourInfo
          score={tourData && tourData.rating}
          duration={tourData && tourData.duration}
          participants={tourData && tourData.participants}
          language={tourData && tourData.language}
          minAge={tourData && tourData.min_age}
          amountOfComments={tourReviews && tourReviews.length}
        />
        {tourData && tourData.photos ? (
          <TourSlider photos={tourData && tourData.photos} />
        ) : (
          <div style={{marginTop: 20, marginBottom: 25}}>
            <SkeletonHOC width={586} height={464} />
          </div>
        )}
        <p className={styles['desc__text']}>
          {tourData ? tourData.description : <SkeletonHOC count={15} />}
        </p>
        {tourData && tourData.tags && tourData.tags.length > 0 ? (
          <CustomTags tags={tourData.tags} />
        ) : (
          <div style={{marginBottom: 30}}>
            <SkeletonHOC width={586} height={65} />
          </div>
        )}
        {tourData && tourData.route && tourData.route.length > 0 ? (
          <MarshrouteMap route={tourData.route} />
        ) : (
          <SkeletonHOC width={586} height={500} />
        )}
        {aboutTour.map((data, index) => {
          const [title, text] = Object.entries(data)[0];
          return text ? (
            <TourDesc
              key={index + 1}
              title={title}
              text={text[0].toUpperCase() + text.slice(1)}
            />
          ) : (
            <div key={index + 1} style={{ marginTop: '20px' }}>
              <SkeletonHOC count={4} />
            </div>
          );
        })}
        <div
          ref={this.reviewsRef}
          id='reviews'
          className={stylesReviews['reviews-wrap']}
        >
          <h2 className={styles['title']}>{`Отзывы (${(tourReviews &&
            tourReviews.length) ||
            '0'})`}</h2>
            <ReviewsList list={tourReviews} />
        </div>
      </div>
    );
  }
}

export default withRouter(TourBody);
