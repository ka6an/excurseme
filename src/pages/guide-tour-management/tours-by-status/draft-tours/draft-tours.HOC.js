import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchToursByStatusStart } from '../../../../redux/tours/tours.actions';

import DraftTours from './draft-tours';

const mapStateToProps = ({ tours: { draftTours } }) => ({ draftTours });

const mapDispatchToProps = dispatch => ({
  getDraftTours(status) {
    dispatch(fetchToursByStatusStart(status));
  }
});

const DraftToursHOC = connect(mapStateToProps, mapDispatchToProps)(DraftTours);

export default withRouter(DraftToursHOC);
