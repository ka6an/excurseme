import { connect } from 'react-redux';
import {
  fetchGuideReviewsStart,
  fetchGuideToursStart
} from '../../../redux/guide/guide.actions';
import ProfileBody from './profile-body.component';

const mapStateToProps = ({
  guide: { guideReviews, guideTours, selectedGuideTour }
}) => ({
  guideReviews: guideReviews,
  guideTours: guideTours && guideTours.tours,
  selectedGuideTour: selectedGuideTour
});

const mapDispatchToProps = dispatch => ({
  getGuideReviews: id => dispatch(fetchGuideReviewsStart(id)),
  getGuideTours: id => dispatch(fetchGuideToursStart(id))
});

const ProfileBodyHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBody);

export default ProfileBodyHOC;
