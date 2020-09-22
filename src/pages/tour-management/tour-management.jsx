import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';

import ROUTES from '../../router-constants/app.routes';
import styles from './tour-management.css';

import ExtendedHeader from '../../components/header/extended-header/extended-header';
import Footer from '../../components/footer/footer';
import StageNavigation from './stage-navigation/stage-navigation';

import CreationStageHOC from './creation-stage/creation-stage.HOC';
import DescriptionStageHOC from './description-stage/description-stage.HOC';
import DetailsStageHOC from './details-stage/details-stage.HOC';
import PhotoStageHOC from './photo-stage/photo-stage.HOC';
import MarshrouteStageHOC from './marshroute-stage/marshroute-stage.HOC';

class TourManagement extends React.Component {
  componentDidMount() {
    const { fetchHubData, hubData } = this.props;
    if (isEmpty(hubData)) {
      // fetchHubData(); // Might only work with configured proxy in order to avoid CORS policy for https://hub.excurse.me requests
    }
  }

  componentWillUnmount() {
    const { clearFormState, clearTourData } = this.props;
    setTimeout(() => {
      clearFormState();
      clearTourData();
    });
  }

  handleFormSubmit = () => {
    const {
      formRequest,
      tourId,
      tourBase,
      tourDetails,
      tourPhotos,
      tourRoute
    } = this.props;
    formRequest(tourId, tourBase, tourDetails, tourPhotos, tourRoute);
  };

  setTourOnVerification = () => {
    const {
      formRequest,
      tourId,
      tourBase,
      tourDetails,
      tourPhotos,
      tourRoute
    } = this.props;
    formRequest(tourId, tourBase, tourDetails, tourPhotos, tourRoute, true);
  };

  render() {
    const { location } = this.props;
    return (
      <>
        <ExtendedHeader />
        <section className={`${styles['wrap']} ${styles['tour-management']}`}>
          <h1 style={{ fontSize: '24px' }}>
            {location.pathname ===
            `${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}`
              ? 'Создать экскурсию'
              : 'Редактировать экскурсию'}
          </h1>
          <StageNavigation />
          <Switch>
            <Route path={`${ROUTES.TOUR_MANAGEMENT.EDITING.DESCRIPTION}`}>
              <DescriptionStageHOC
                handleFormSubmit={this.handleFormSubmit}
                setTourOnVerification={this.setTourOnVerification}
              />
            </Route>
            <Route path={ROUTES.TOUR_MANAGEMENT.EDITING.DETAILS}>
              <DetailsStageHOC
                handleFormSubmit={this.handleFormSubmit}
                setTourOnVerification={this.setTourOnVerification}
              />
            </Route>
            <Route path={ROUTES.TOUR_MANAGEMENT.EDITING.PHOTOS}>
              <PhotoStageHOC
                handleFormSubmit={this.handleFormSubmit}
                setTourOnVerification={this.setTourOnVerification}
              />
            </Route>
            <Route path={ROUTES.TOUR_MANAGEMENT.EDITING.ROUTE}>
              <MarshrouteStageHOC
                handleFormSubmit={this.handleFormSubmit}
                setTourOnVerification={this.setTourOnVerification}
              />
            </Route>
            <Route
              path={`${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}`}
            >
              <CreationStageHOC />
            </Route>
          </Switch>
        </section>
        <Footer />
      </>
    );
  }
}

export default TourManagement;
