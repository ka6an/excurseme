import { connect } from 'react-redux';
import { setRouteStageState } from '../../../redux/tour-form/tour-form.actions';
import { fetchTourRouteStart } from '../../../redux/tour/tour.actions';

import MarshrouteStage from './marshroute-stage';

const mapStateToProps = ({
  tour: { tourId, tourRoute },
  tourForm: { isDescriptionValid, route }
}) => ({
  tourId,
  fetchedRoute: tourRoute,
  tourFormRoute: route,
  isDescriptionValid
});

const mapDispatchToProps = dispatch => ({
  setRouteStageState: (formData, validation) =>
    dispatch(setRouteStageState(formData, validation)),
  fetchTourRoute: tourId => dispatch(fetchTourRouteStart(tourId))
});

const MarshrouteStageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarshrouteStage);

export default MarshrouteStageHOC;
