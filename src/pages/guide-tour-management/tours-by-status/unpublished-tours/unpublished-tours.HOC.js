import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchToursByStatusStart } from '../../../../redux/tours/tours.actions';

import UnpublishedTours from './unpublished-tours';

const mapStateToProps = ({ tours: { unpublishedTours } }) => ({
  unpublishedTours
});

const mapDispatchToProps = dispatch => ({
  getUnpublishedTours(status) {
    dispatch(fetchToursByStatusStart(status));
  }
});

const UnpublishedToursHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnpublishedTours);

export default withRouter(UnpublishedToursHOC);
