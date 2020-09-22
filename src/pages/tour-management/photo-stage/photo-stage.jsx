import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import PhotoItem from './photo-item/photo-item';
import Dropzone from './dropzone/dropzone';

import formStyles from '../../../components/form-components/form.css';
import styles from './photo-stage.css';
import CustomButton from '../../../components/form-components/custom-button/custom-button';

const PhotoStage = props => {
  const {
    tourId,
    tourPhotos,
    fetchedPhotos,
    setPhotoStageState,
    fetchTourPhotos,
    handleFormSubmit,
    setTourOnVerification,
    isDescriptionValid
  } = props;

  const [photos, setPhotos] = useState(tourPhotos);

  useEffect(() => {
    tourId && !fetchedPhotos && fetchTourPhotos(tourId);
  }, [fetchTourPhotos, tourId]);

  useEffect(() => () => !isEmpty(photos) && setPhotoStageState(photos, true), [
    photos
  ]);

  const transferPhotos = files => {
    if (!isEmpty(files)) setPhotos([...files]);
  };

  const setPhotoStageStateAndSubmitForm = () => {
    new Promise(resolve => {
      setPhotoStageState(photos, true);
      resolve();
    }).then(() => handleFormSubmit());
  };

  const setPhotoStageStateAndSetTourOnVerification = () => {
    new Promise(resolve => {
      setPhotoStageState(photos, true);
      resolve();
    }).then(() => setTourOnVerification());
  };

  const renderPhotoPreviews = (photos, fetchedPhotos) => {
    if (!fetchedPhotos) fetchedPhotos = [];
    if (!photos) photos = [];
    return [...photos, ...fetchedPhotos].length
      ? [...photos, ...fetchedPhotos].map(photo => {
          let key, imgUrl, imgId, name;

          if (photo.file) {
            const { file, imageUrl } = photo;
            key = imageUrl;
            imgUrl = imageUrl;
            imgId = imageUrl;
            name = file.name;
          }
          if (photo.id) {
            const { id, url } = photo;
            key = id;
            imgUrl = url;
            imgId = id;
            name = '';
          }
          return (
            <PhotoItem key={key} imgUrl={imgUrl} imgId={imgId} name={name} />
          );
        })
      : null;
  };

  return (
    <div className={styles['photo-stage']}>
      <div className={styles['photo-list']}>
        <Dropzone transferPhotos={transferPhotos} />
        {renderPhotoPreviews(photos, fetchedPhotos)}
      </div>
      <div className={formStyles['buttons']}>
        <CustomButton
          isActive={isDescriptionValid}
          secondary={true}
          onClick={setPhotoStageStateAndSubmitForm}
        >
          Сохранить
        </CustomButton>
        <CustomButton
          isActive={isDescriptionValid}
          primary={true}
          onClick={setPhotoStageStateAndSetTourOnVerification}
        >
          На проверку
        </CustomButton>
      </div>
    </div>
  );
};

export default PhotoStage;
