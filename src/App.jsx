import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import {
  setCurrentGuide,
  setCurrentTour,
  fetchSelectedGuideTourStart,
  fetchSelectedGuideTourReviewsStart,
  fetchGuideScheduleStart
} from './redux/guide/guide.actions';
import { setTourId } from './redux/tour/tour.actions';

import ROUTES from './router-constants/app.routes';

import styles from './App.css';

import Header from './components/header/header.component';
import ProfileHOC from './pages/profile/profile.HOC';
import TourManagementHOC from './pages/tour-management/tour-management.HOC';
import GuideTourManagementHOC from './pages/guide-tour-management/guide-tour-management.HOC';
import NoMatchHOC from './pages/no-match/no-match.HOC';

class App extends React.Component {
  state = {
    guideId: 0,
    tourId: 0
  };

  render() {
    const { guideId } = this.state;

    return (
      <>
        <Switch>
          <Route path={`${ROUTES.HOMEPAGE}`} exact>
            <Header />
            <div>
              <h1>Homepage</h1>
              <label htmlFor='guide'>Choose Guide</label>
              <input
                type='number'
                onChange={event =>
                  this.setState({ guideId: event.target.value })
                }
              />
              <p>Current guide has id of: {this.state.guideId}</p>
              <Link to={`${ROUTES.GUIDE.PROFILE}/${guideId}`}>Profile</Link>
              <br />
              <br />
              <label htmlFor='tour'>Choose Tour to Edit</label>
              <input
                type='number'
                onChange={event => {
                  this.setState({ tourId: event.target.value });
                  this.props.setTourId(event.target.value);
                }}
              />
              <p>Current tour has id of: {this.state.tourId}</p>
              <Link to={`${ROUTES.TOUR_MANAGEMENT.EDITING.DESCRIPTION}`}>
                Edit Tour
              </Link>
            </div>
            <br />
            <Link
              to={`${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}`}
            >
              Create Tour (Demo)
            </Link>
            <br />
            <br />
            <Link to={`${ROUTES.GUIDE_TOUR_MANAGEMENT.BASE}`}>
              Guide Tour Management (Demo)
            </Link>
          </Route>
          <Route
            path={`${ROUTES.GUIDE.PROFILE}/:guide_id`}
            component={ProfileHOC}
          />
          <Route
            path={`${ROUTES.TOUR_MANAGEMENT.BASE}`}
            component={TourManagementHOC}
          />
          <Route
            path={`${ROUTES.GUIDE_TOUR_MANAGEMENT.BASE}`}
            component={GuideTourManagementHOC}
          />
          <Route
            path={`${ROUTES.ERROR}`}
            component={NoMatchHOC}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ guide: { isLoading, error } }) => ({
  isLoading,
  error
});

const mapDispatchToProps = dispatch => ({
  setCurrentGuide: guideId => dispatch(setCurrentGuide(guideId)),
  setCurrentTour: tourId => dispatch(setCurrentTour(tourId)),
  fetchSelectedGuideTour: (guideId, tourId) =>
    dispatch(fetchSelectedGuideTourStart(guideId, tourId)),
  fetchSelectedGuideTourReviews: (guideId, tourId) =>
    dispatch(fetchSelectedGuideTourReviewsStart(guideId, tourId)),
  fetchGuideSchedule: (guideId, dateStart, dateEnd) =>
    dispatch(fetchGuideScheduleStart(guideId, dateStart, dateEnd)),
  setTourId: tourId => dispatch(setTourId(tourId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
