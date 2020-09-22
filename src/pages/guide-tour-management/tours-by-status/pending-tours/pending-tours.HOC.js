import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchToursByStatusStart } from '../../../../redux/tours/tours.actions';

import PendingTours from './pending-tours';

const mapStateToProps = ({ tours: { pendingTours } }) => ({
  pendingTours
});

const mapDispatchToProps = dispatch => ({
  getPendingTours(status) {
    dispatch(fetchToursByStatusStart(status));
  }
});

const PendingToursHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingTours);

export default withRouter(PendingToursHOC);
