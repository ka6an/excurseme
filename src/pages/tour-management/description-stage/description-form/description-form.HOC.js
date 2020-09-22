import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setDescriptionStageState } from '../../../../redux/tour-form/tour-form.actions';

import { createTourStart } from '../../../../redux/tour/tour.actions';

import DescriptionForm from './description-form';

const mapStateToProps = ({ hub: { data } }) => ({ hubData: data });

const mapDispatchToProps = dispatch => ({
  setDescriptionStageState: (formData, isValid) =>
    dispatch(setDescriptionStageState(formData, isValid)),
  createTour: formData => dispatch(createTourStart(formData))
});

const DescriptionFormHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionForm);

export default withRouter(DescriptionFormHOC);
