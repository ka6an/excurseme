import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchToursByStatusStart } from '../../../../redux/tours/tours.actions';

import RejectedTours from './rejected-tours';

const mapStateToProps = ({ tours: { rejectedTours } }) => ({
  rejectedTours
});

const mapDispatchToProps = dispatch => ({
  getRejectedTours(status) {
    dispatch(fetchToursByStatusStart(status));
  }
});

const RejectedToursHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(RejectedTours);

export default withRouter(RejectedToursHOC);
