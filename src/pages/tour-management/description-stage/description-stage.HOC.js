import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDescriptionStageState } from '../../../redux/tour-form/tour-form.actions';
import { fetchTourBaseStart } from '../../../redux/tour/tour.actions';

import DescriptionStage from './description-stage';

const mapStateToProps = ({
  tour: { tourId, tourBase },
  tourForm: { description }
}) => ({
  tourBase,
  tourDescription: description,
  tourId
});

const mapDispatchToProps = dispatch => ({
  setDescriptionStageState: (formData, isValid) =>
    dispatch(setDescriptionStageState(formData, isValid)),
  fetchTourBase: tourId => dispatch(fetchTourBaseStart(tourId))
});

const DescriptionStageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionStage);

export default withRouter(DescriptionStageHOC);
