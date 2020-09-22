import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

import formStyles from '../../../components/form-components/form.css';
import styles from './details-stage.css';

import CustomButton from '../../../components/form-components/custom-button/custom-button';

class DetailsForm extends React.Component {
  componentWillUnmount() {
    const { setDetailsStageState, values, isValid } = this.props;
    setDetailsStageState(values, isValid);
  }

  setDetailsStageStateAndSubmitForm = () => {
    const { setDetailsStageState, handleSubmit, values, isValid } = this.props;
    new Promise(resolve => {
      setDetailsStageState(values, isValid);
      resolve();
    }).then(() => handleSubmit());
  };

  setDetailsStageStateAndSetTourOnVerification = () => {
    const {
      values,
      isValid,
      setDetailsStageState,
      setTourOnVerification
    } = this.props;
    new Promise(resolve => {
      setDetailsStageState(values, isValid);
      resolve();
    }).then(() => setTourOnVerification());
  };

  render() {
    const { isDescriptionValid } = this.props;
    return (
      <Form className={formStyles['form']}>
        <div className={formStyles['group']}>
          <label htmlFor='includes' className={formStyles['label']}>
            Что включено
          </label>
          <Field
            name='includes'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='includes' />
        </div>
        <div className={formStyles['group']}>
          <label htmlFor='plan' className={formStyles['label']}>
            Как будет проходить
          </label>
          <Field
            name='plan'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='plan' />
        </div>
        <div className={formStyles['group']}>
          <label htmlFor='features' className={formStyles['label']}>
            Фишки
          </label>
          <Field
            name='features'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='features' />
        </div>
        <div className={formStyles['group']}>
          <label htmlFor='warning' className={formStyles['label']}>
            Важно
          </label>
          <Field
            name='warning'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='warning' />
        </div>
        <div className={formStyles['group']}>
          <label htmlFor='keep_in_mind' className={formStyles['label']}>
            Не забыть
          </label>
          <Field
            name='keep_in_mind'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='keep_in_mind' />
        </div>
        <div className={formStyles['group']}>
          <label htmlFor='requirements' className={formStyles['label']}>
            Требования
          </label>
          <Field
            name='requirements'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='requirements' />
        </div>
        <div className={formStyles['group']}>
          <label htmlFor='policies' className={formStyles['label']}>
            Правила
          </label>
          <Field
            name='policies'
            as='textarea'
            type='text'
            className={formStyles['textarea']}
          />
          <ErrorMessage name='policies' />
        </div>
        <div className={formStyles['buttons']}>
          <CustomButton
            isActive={isDescriptionValid}
            secondary={true}
            onClick={this.setDetailsStageStateAndSubmitForm}
          >
            Сохранить
          </CustomButton>
          <CustomButton
            isActive={isDescriptionValid}
            primary={true}
            onClick={this.setDetailsStageStateAndSetTourOnVerification}
          >
            На проверку
          </CustomButton>
        </div>
      </Form>
    );
  }
}

export default DetailsForm;
