import { connect } from 'react-redux';
import TourBody from './tour-body.component';
import {
  fetchSelectedGuideTourStart,
  fetchSelectedGuideTourReviewsStart
} from '../../../redux/guide/guide.actions';

const mapStateToProps = ({ guide: { selectedGuideTourReviews, error } }) => ({
  tourReviews: selectedGuideTourReviews,
  error
});

const mapDispatchToProps = dispatch => ({
  getSelectedGuideTour: (guideId, tourId) =>
    dispatch(fetchSelectedGuideTourStart(guideId, tourId)),
  getSelectedGuideTourReviews: (guideId, tourId) =>
    dispatch(fetchSelectedGuideTourReviewsStart(guideId, tourId))
});

const TourBodyHOC = connect(mapStateToProps, mapDispatchToProps)(TourBody);

export default TourBodyHOC;
