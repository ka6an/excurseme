import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StatusBar from './status-bar';

const mapStateToProps = ({
  tours: {
    activeAmount,
    unpublishedAmount,
    draftAmount,
    rejectedAmount,
    pendingAmount
  }
}) => ({
  activeAmount,
  unpublishedAmount,
  draftAmount,
  rejectedAmount,
  pendingAmount
});

const mapDispatchToProps = dispatch => ({});

const StatusBarHOC = connect(mapStateToProps, mapDispatchToProps)(StatusBar);

export default withRouter(StatusBarHOC);
