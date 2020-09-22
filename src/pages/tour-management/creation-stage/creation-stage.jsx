import React from 'react';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import DescriptionFormHOC from '../description-stage/description-form/description-form.HOC';
import ROUTES from '../../../router-constants/app.routes';

class CreationStage extends React.Component {
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
    isDurationValid: false,
    isDurationSecondaryValid: false
  };

  render() {
    const { setDescriptionStageState, history, createTour } = this.props;
    const {
      formValues,
      isDurationValid,
      isDurationSecondaryValid
    } = this.state;
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
        onSubmit={values => {
          window.scroll(0, 0);
          const {
            name,
            description,
            language,
            duration,
            durationSecondary,
            type,
            min_age,
            tags
          } = values;

          const tourBaseFormData = {
            name,
            description,
            language: language.id,
            duration: duration.value + durationSecondary.value,
            type,
            min_age,
            tags: tags.map(tag => tag.value).toString()
          };

          setDescriptionStageState(values, true);
          const formData = new FormData();
          for (const prop in tourBaseFormData) {
            formData.append(prop, tourBaseFormData[prop]);
          }
          // Post form data to the /web/tour/create/ endpoint
          createTour(formData);
          history.push(`${ROUTES.TOUR_MANAGEMENT.EDITING.DESCRIPTION}`);
        }}
      >
        {formik => (
          <DescriptionFormHOC {...formik} />
        ) /* spreading 'formik' already makes 'touched' and 'errors' available in the comp */}
      </Formik>
    );
  }
}

export default CreationStage;
