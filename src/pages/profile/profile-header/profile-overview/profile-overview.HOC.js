import { connect } from 'react-redux';
import ProfileOverview from './profile-overview.component';

const mapStateToProps = ({ guide: { isLoading } }) => ({
  isLoading: isLoading
});

const ProfileOverviewHOC = connect(mapStateToProps)(ProfileOverview);

export default ProfileOverviewHOC;
