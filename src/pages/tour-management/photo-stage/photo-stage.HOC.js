import { connect } from 'react-redux';
import { setPhotoStageState } from '../../../redux/tour-form/tour-form.actions';
import { fetchTourPhotosStart } from '../../../redux/tour/tour.actions';

import PhotoStage from './photo-stage';

const mapStateToProps = ({
  tour: { tourId, tourPhotos },
  tourForm: { isDescriptionValid, photos }
}) => ({
  tourId,
  fetchedPhotos: tourPhotos,
  tourPhotos: photos,
  isDescriptionValid
});

const mapDispatchToProps = dispatch => ({
  setPhotoStageState: (formData, validation) =>
    dispatch(setPhotoStageState(formData, validation)),
  fetchTourPhotos: tourId => dispatch(fetchTourPhotosStart(tourId))
});

const PhotoStageHOC = connect(mapStateToProps, mapDispatchToProps)(PhotoStage);

export default PhotoStageHOC;
