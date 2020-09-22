import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearGuideData } from '../../redux/guide/guide.actions';

import NoMatch from './no-match';

const mapStateToProps = ({ guide: { error } }) => ({ error });

const mapDispatchToProps = dispatch => ({
  clearGuideData() {
    dispatch(clearGuideData());
  }
});

const NoMatchHOC = connect(mapStateToProps, mapDispatchToProps)(NoMatch);

export default withRouter(NoMatchHOC);
