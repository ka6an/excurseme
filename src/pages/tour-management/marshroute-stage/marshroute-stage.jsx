import React from 'react';
import { isEmpty } from 'lodash';

import formStyles from '../../../components/form-components/form.css';
import styles from './marshroute-stage.css';

import CreateRoute from '../../../components/marshroute-map/create-route/create-route.component';
import CustomButton from '../../../components/form-components/custom-button/custom-button';

class MarshrouteStage extends React.Component {
  componentDidMount() {
    const { fetchTourRoute, fetchedRoute, tourId } = this.props;

    if (tourId && !fetchedRoute) {
      fetchTourRoute(tourId);
    }
  }

  componentWillUnmount() {
    const { setRouteStageState } = this.props;
    if (!isEmpty(this.getRoutes())) {
      setRouteStageState(this.getRoutes(), true);
    }
  }

  handleFormSubmit = () => {
    const { handleFormSubmit, setRouteStageState } = this.props;
    new Promise(resolve => {
      setRouteStageState(this.getRoutes(), true);
      resolve();
    }).then(() => handleFormSubmit());
  };

  setTourOnVerification = () => {
    const { setTourOnVerification, setRouteStageState } = this.props;
    new Promise(resolve => {
      setRouteStageState(this.getRoutes(), true);
      resolve();
    }).then(() => setTourOnVerification());
  };

  render() {
    const { isDescriptionValid, fetchedRoute } = this.props;
    return (
      <>
        <CreateRoute
          fetchedRoute={fetchedRoute || null}
          ref={route => {
            if (route) {
              this.getRoutes = route.getRoutes;
            }
          }}
        />
        <div className={formStyles['buttons']}>
          <CustomButton
            isActive={isDescriptionValid}
            secondary={true}
            onClick={this.handleFormSubmit}
          >
            Сохранить
          </CustomButton>
          <CustomButton
            isActive={isDescriptionValid}
            primary={true}
            onClick={this.setTourOnVerification}
          >
            На проверку
          </CustomButton>
        </div>
      </>
    );
  }
}

export default MarshrouteStage;
