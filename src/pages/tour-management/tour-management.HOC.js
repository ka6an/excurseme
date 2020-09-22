import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { fetchHubDataStart } from '../../redux/hub/hub.actions';
import {
  postTourInformationStart,
  clearFormState
} from '../../redux/tour-form/tour-form.actions';
import { clearTourData } from '../../redux/tour/tour.actions';

import TourManagement from './tour-management';

const mapStateToProps = ({
  tour: { tourId },
  tourForm: { description, details, photos, route },
  hub: { data }
}) => ({
  tourId,
  tourBase: description,
  tourDetails: details,
  tourPhotos: photos,
  tourRoute: route,
  hubData: data
});

const mapDispatchToProps = dispatch => ({
  fetchHubData: () => dispatch(fetchHubDataStart()),
  clearFormState: () => dispatch(clearFormState()),
  clearTourData: () => dispatch(clearTourData()),
  formRequest(
    tourId,
    tourBase,
    tourDetails,
    tourPhotos,
    tourRoute,
    setOnVerification = false
  ) {
    const tourBaseFormData = new FormData();

    tourBaseFormData.append('name', tourBase.name);
    tourBaseFormData.append('description', tourBase.description);
    tourBaseFormData.append('language', tourBase.language.id);
    tourBaseFormData.append(
      'duration',
      tourBase.duration.value + tourBase.durationSecondary.value
    );
    tourBaseFormData.append('type', tourBase.type);
    tourBaseFormData.append('min_age', tourBase.min_age);
    tourBaseFormData.append(
      'tags',
      tourBase.tags ? tourBase.tags.map(tag => tag.value).toString() : ''
    );

    const tourDetailsFormData = new FormData();
    for (const prop in tourDetails) {
      tourDetailsFormData.append(prop, tourDetails[prop]);
    }

    let photoRequests = [];
    if (!isEmpty(tourPhotos)) {
      for (const obj of tourPhotos) {
        photoRequests = [
          ...photoRequests,
          {
            photoRequest: (() => {
              const data = new FormData();
              data.append('photo', obj.file, obj.file.name);
              return data;
            })()
          }
        ];
      }
    }

    const tourRouteFormData = new FormData();
    if (!isEmpty(tourRoute)) {
      tourRouteFormData.append('total_points', tourRoute.length);
      for (const path of tourRoute) {
        tourRouteFormData.append(
          `point_${path.searchBoxId + 1}_latitude`,
          path.lat
        );
        tourRouteFormData.append(
          `point_${path.searchBoxId + 1}_longitude`,
          path.lng
        );
        tourRouteFormData.append(
          `point_${path.searchBoxId + 1}_label`,
          `${path.label}`
        );
      }
    }

    dispatch(
      postTourInformationStart(
        tourId,
        tourBaseFormData,
        tourDetailsFormData,
        photoRequests,
        tourRouteFormData,
        setOnVerification
      )
    );
  }
});

const TourManagementHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(TourManagement);

export default withRouter(TourManagementHOC);
