import React from 'react';
import { Formik } from 'formik';
import { isEmpty } from 'lodash';
import * as Yup from 'yup';

import DescriptionFormHOC from './description-form/description-form.HOC';

class DescriptionStage extends React.Component {
  state = {
    formValues: {
      name: '',
      description: '',
      language: '',
      duration: { value: 0, label: '0' },
      durationSecondary: { value: 0, label: '0' },
      type: '',
      min_age: '',
      tags: []
    },
    initialValuesLoaded: false
  };

  componentDidMount() {
    const { tourDescription, fetchTourBase, tourBase, tourId } = this.props;

    if (tourId && !tourBase) {
      fetchTourBase(tourId);
    }

    if (!isEmpty(tourDescription)) {
      this.setState({ formValues: tourDescription });
    }
  }

  componentDidUpdate() {
    const { tourDescription, tourBase } = this.props;
    const { initialValuesLoaded } = this.state;

    // Set form values with data from /web/tour/:tour_id/base/ endpoint
    if (tourBase && isEmpty(tourDescription) && !initialValuesLoaded) {
      let durationInHours = {};
      let durationInMinutes = {};

      if (tourBase.duration % 60 === 0) {
        durationInHours.label = String(tourBase.duration / 60);
        durationInHours.value = tourBase.duration;
        durationInMinutes.label = String(0);
        durationInMinutes.value = 0;
      } else {
        durationInHours.label = String(Math.floor(tourBase.duration / 60));
        durationInHours.value = tourBase.duration - (tourBase.duration % 60);
        durationInMinutes.label = String(tourBase.duration % 60);
        durationInMinutes.value = tourBase.duration % 60;
      }

      this.setState({
        formValues: {
          ...tourBase,
          duration: {
            value: durationInHours.value,
            label: durationInHours.label
          },
          durationSecondary: {
            value: durationInMinutes.value,
            label: durationInMinutes.label
          },
          type: tourBase.type.id
        },
        initialValuesLoaded: true
      });
    }
  }

  render() {
    const { handleFormSubmit, setTourOnVerification } = this.props;
    const { formValues } = this.state;
    return (
      <Formik
        initialValues={formValues}
        validateOnMount={true}
        validationSchema={Yup.object({
          name: Yup.string().required('Обязательное поле'),
          description: Yup.string().required('Обязательное поле'),
          language: Yup.string().required('Обязательное поле'),
          duration: Yup.object({
            value: Yup.number(),
            label: Yup.string()
          }).required('Обязательное поле'),
          durationSecondary: Yup.object({
            value: Yup.number(),
            label: Yup.string()
          }).notRequired(),
          type: Yup.string().required('Обязательное поле'),
          min_age: Yup.string().required('Обязательное поле'),
          tags: Yup.array().notRequired()
        })}
        validate={values => {
          const errors = {};
          if (values.duration.value + values.durationSecondary.value === 0) {
            errors.duration = 'Duration should be present';
          }
          return errors;
        }}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
      >
        {formik => (
          <DescriptionFormHOC
            {...formik}
            setTourOnVerification={setTourOnVerification}
          />
        )}
      </Formik>
    );
  }
}

export default DescriptionStage;
