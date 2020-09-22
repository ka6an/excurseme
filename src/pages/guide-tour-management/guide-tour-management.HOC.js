import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearToursData } from '../../redux/tours/tours.actions';

import GuideTourManagement from './guide-tour-management';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  clearToursData() {
    dispatch(clearToursData());
  }
});

const GuideTourManagementHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuideTourManagement);

export default withRouter(GuideTourManagementHOC);
