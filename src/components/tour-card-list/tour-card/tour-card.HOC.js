import { connect } from 'react-redux';
import {
  setCurrentTour,
  fetchSelectedGuideTourStart,
  fetchSelectedGuideTourReviewsStart
} from '../../../redux/guide/guide.actions';

import TourCard from './tour-card.component';

const mapStateToProps = ({ guide: { guideData } }) => ({
  guideId: guideData && guideData.id
});

const mapDispatchToProps = dispatch => ({
  setCurrentTour: id => dispatch(setCurrentTour(id)),
  fetchSelectedGuideTour: (guideId, tourId) =>
    dispatch(fetchSelectedGuideTourStart(guideId, tourId)),
  fetchSelectedGuideTourReviews: (guideId, tourId) =>
    dispatch(fetchSelectedGuideTourReviewsStart(guideId, tourId))
});

const TourCardHOC = connect(mapStateToProps, mapDispatchToProps)(TourCard);

export default TourCardHOC;
