import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDescriptionStageState } from '../../../redux/tour-form/tour-form.actions';
import { createTourStart } from '../../../redux/tour/tour.actions';

import CreationStage from './creation-stage';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  setDescriptionStageState: (formData, isValid) =>
    dispatch(setDescriptionStageState(formData, isValid)),
  createTour: formData => dispatch(createTourStart(formData))
});

const CreationStageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreationStage);

export default withRouter(CreationStageHOC);
