import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from '../../router-constants/app.routes';
import styles from './guide-tour-management.css';

import ExtendedHeader from '../../components/header/extended-header/extended-header';
import Footer from '../../components/footer/footer';
import ActiveToursHOC from './tours-by-status/active-tours/active-tours.HOC';
import UnpublishedToursHOC from './tours-by-status/unpublished-tours/unpublished-tours.HOC';
import DraftToursHOC from './tours-by-status/draft-tours/draft-tours.HOC';
import RejectedToursHOC from './tours-by-status/rejected-tours/rejected-tours.HOC';
import PendingToursHOC from './tours-by-status/pending-tours/pending-tours.HOC';
import StatusBarHOC from './status-bar/status-bar.HOC';

const GuideTourManagement = ({ clearToursData, history }) => {
  useEffect(() => {
    history.push(ROUTES.GUIDE_TOUR_MANAGEMENT.ACTIVE);
    return () => clearToursData();
  }, [clearToursData]);

  return (
    <>
      <ExtendedHeader />
      <section className={`${styles['content']} ${styles['content--large']}`}>
        <StatusBarHOC />
        <Switch>
          <Route
            exact
            path={ROUTES.GUIDE_TOUR_MANAGEMENT.ACTIVE}
            component={ActiveToursHOC}
          />
          <Route
            exact
            path={ROUTES.GUIDE_TOUR_MANAGEMENT.UNPUBLISHED}
            component={UnpublishedToursHOC}
          />
          <Route
            exact
            path={ROUTES.GUIDE_TOUR_MANAGEMENT.DRAFT}
            component={DraftToursHOC}
          />
          <Route
            exact
            path={ROUTES.GUIDE_TOUR_MANAGEMENT.REJECTED}
            component={RejectedToursHOC}
          />
          <Route
            exact
            path={ROUTES.GUIDE_TOUR_MANAGEMENT.PENDING}
            component={PendingToursHOC}
          />
        </Switch>
      </section>
      <Footer />
    </>
  );
};

export default GuideTourManagement;
