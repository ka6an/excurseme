import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchToursByStatusStart } from '../../../../redux/tours/tours.actions';

import ActiveTours from './active-tours';

const mapStateToProps = ({ tours: { activeTours } }) => ({
  activeTours
});

const mapDispatchToProps = dispatch => ({
  getActiveTours(status) {
    dispatch(fetchToursByStatusStart(status));
  }
});

const ActiveToursHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTours);

export default withRouter(ActiveToursHOC);
