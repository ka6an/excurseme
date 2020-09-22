import React from 'react';
import { Formik } from 'formik';
import { isEmpty } from 'lodash';
import * as Yup from 'yup';

import DetailsForm from './details-form';

class DetailsStage extends React.Component {
  state = {
    formValues: {
      includes: '',
      plan: '',
      features: '',
      warning: '',
      keep_in_mind: '',
      requirements: '',
      policies: ''
    },
    initialValuesLoaded: false
  };

  componentDidMount() {
    const {
      tourFormDetails,
      fetchTourDetails,
      tourDetails,
      tourId
    } = this.props;

    if (tourId && !tourDetails) {
      fetchTourDetails(tourId);
    }

    if (!isEmpty(tourFormDetails)) {
      this.setState({ formValues: tourFormDetails });
    }
  }

  componentDidUpdate() {
    const { tourFormDetails, tourDetails } = this.props;
    const { initialValuesLoaded } = this.state;

    // Set form values with data from /web/tour/:tour_id/base/ endpoint
    if (tourDetails && isEmpty(tourFormDetails) && !initialValuesLoaded) {
      this.setState({
        formValues: {
          includes: tourDetails.includes || '',
          plan: tourDetails.plan || '',
          features: tourDetails.features || '',
          warning: tourDetails.warning || '',
          keep_in_mind: tourDetails.keep_in_mind || '',
          requirements: tourDetails.requirements || '',
          policies: tourDetails.policies || ''
        },
        initialValuesLoaded: true
      });
    }
  }

  render() {
    const {
      setDetailsStageState,
      handleFormSubmit,
      setTourOnVerification,
      isDescriptionValid
    } = this.props;

    const { formValues } = this.state;

    return (
      <Formik
        initialValues={formValues}
        validateOnMount={true}
        validationSchema={Yup.object({
          includes: Yup.string(),
          plan: Yup.string(),
          features: Yup.string(),
          warning: Yup.string(),
          keep_in_mind: Yup.string(),
          requirements: Yup.string(),
          policies: Yup.string()
        })}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
      >
        {formik => (
          <DetailsForm
            {...formik}
            setDetailsStageState={setDetailsStageState}
            setTourOnVerification={setTourOnVerification}
            isDescriptionValid={isDescriptionValid}
          />
        )}
      </Formik>
    );
  }
}

export default DetailsStage;
