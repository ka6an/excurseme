import { connect } from 'react-redux';
import { clearCurrentTourData } from '../../redux/guide/guide.actions';

import TourContent from './tour-content.component';

const mapDispatchToProps = dispatch => ({
  clearCurrentTourData: () => dispatch(clearCurrentTourData())
});

const TourContentHOC = connect(null, mapDispatchToProps)(TourContent);

export default TourContentHOC;
