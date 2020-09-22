import { connect } from 'react-redux';
import ProfileBio from './profile-bio.component';

const mapStateToProps = ({ guide: { isLoading } }) => ({
  isLoading: isLoading
});

const ProfileBioHOC = connect(mapStateToProps)(ProfileBio);

export default ProfileBioHOC;
