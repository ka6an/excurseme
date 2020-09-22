import { connect } from 'react-redux';
import ProfileTabs from './profile-tabs.component';

const mapStateToProps = ({ guide }) => ({
  guideId: guide.currentGuide
});

const ProfileTabsHOC = connect(null)(ProfileTabs);

export default ProfileTabsHOC;
