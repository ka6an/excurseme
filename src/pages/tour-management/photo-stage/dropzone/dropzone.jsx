import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import CustomIcon from '../../../../components/custom-icon/custom-icon.component';

import styles from './dropzone.css';

const Dropzone = props => {
  const { transferPhotos } = props;
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles([
        ...files,
        ...acceptedFiles.map(file => ({
          file,
          imageUrl: URL.createObjectURL(file)
        }))
      ]);
    }
  });

  useEffect(() => {
    transferPhotos(files);
  }, [files]);

  return (
    <div {...getRootProps({ className: `${styles['dropzone']}` })}>
      <div className={styles['dropzone-input']}>
        <CustomIcon
          className={styles['dropzone__icon']}
          iconName={'plus-circle-orange'}
        />
        <input className={styles['dropzone__file']} {...getInputProps()} />
        <label htmlFor='file' className={styles['dropzone__label']}>
          Загрузить фото
        </label>
      </div>
    </div>
  );
};

export default Dropzone;
