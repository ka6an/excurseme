import { connect } from 'react-redux';
import { fetchTourDetailsStart } from '../../../redux/tour/tour.actions';
import { setDetailsStageState } from '../../../redux/tour-form/tour-form.actions';

import DetailsStage from './details-stage';

const mapStateToProps = ({
  tour: { tourId, tourDetails },
  tourForm: { isDescriptionValid, details }
}) => ({
  tourId,
  isDescriptionValid,
  tourDetails,
  tourFormDetails: details
});

const mapDispatchToProps = dispatch => ({
  setDetailsStageState: (formData, validation) =>
    dispatch(setDetailsStageState(formData, validation)),
  fetchTourDetails: tourId => dispatch(fetchTourDetailsStart(tourId))
});

const DetailsStageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsStage);

export default DetailsStageHOC;
