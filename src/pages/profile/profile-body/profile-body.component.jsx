import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from '../../../router-constants/app.routes';

import ProfileTabsHOC from './profile-tabs/profile-tabs.HOC';
import ProfileAboutHOC from './profile-content/profile-subpages/profile-about.HOC';
import ProfileTours from './profile-content/profile-subpages/profile-tours.component';
import TourContentHOC from '../../../components/tour-content/tour-content.HOC';
import ProfileReviews from './profile-content/profile-subpages/profile-reviews.component';
import DownloadMobile from '../../../components/download-mobile/download-mobile.component';

import styles from './profile-body.css';

class ProfileBody extends React.Component {
  state = { guideId: null };

  componentDidMount() {
    const { getGuideReviews, getGuideTours, matchObj } = this.props;
    this.setState({ guideId: matchObj.url.split('/guide/')[1] }, () => {
      const { guideId } = this.state;
      getGuideTours(guideId);
      getGuideReviews(guideId);
    });
  }
  render() {
    const {
      bodyData: { bio },
      guideReviews,
      guideTours,
      selectedGuideTour
    } = this.props;
    const { guideId } = this.state;
    return (
      <div className={styles['profile-body']}>
        <ProfileTabsHOC guideId={guideId} />
        <Switch>
          <Route
            exact
            path={`${ROUTES.GUIDE.PROFILE}/:guide_id${ROUTES.GUIDE.TOURS}/:tour_id`}
          >
            <TourContentHOC tourData={selectedGuideTour} />
          </Route>
          <Route
            exact
            path={`${ROUTES.GUIDE.PROFILE}/:guide_id${ROUTES.GUIDE.TOURS}`}
          >
            <ProfileTours
              tourList={guideTours}
              emptyMessageIconName='empty-tours'
              emptyMessageText='Экскурсий на выбранную дату нет'
            />
          </Route>
          <Route
            exact
            path={`${ROUTES.GUIDE.PROFILE}/:guide_id${ROUTES.GUIDE.REVIEWS}`}
          >
            <ProfileReviews
              reviewList={guideReviews}
              emptyMessageIconName='empty-reviews'
              emptyMessageText='У вас нет отзывов'
            />
          </Route>
          <Route exact path={`${ROUTES.GUIDE.PROFILE}/:guide_id`}>
            <ProfileAboutHOC bio={bio} guideId={guideId} />
          </Route>
        </Switch>
        <DownloadMobile />
      </div>
    );
  }
}

export default ProfileBody;
