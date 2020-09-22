import React from 'react';
import Slider from 'react-slick';
import { SkeletonHOC } from '../../../../utils';
import TourSliderItem from './tour-slider-item/tour-slider-item.component';
import TourSliderArrow from './tour-slider-arrow/tour-slider-arrow';

import 'slick-carousel/slick/slick.css?raw';

import styles from './tour-slider.css';
import Modal from '../../../modal/modal';

class TourSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      isModalOpen: false
    };
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  setModalSlide = index => () => this.sliderModal.slickGoTo(index, true);
  static sliderSmallSettings = {
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true,
    nextArrow: (
      <TourSliderArrow
        customClass={`${styles['slider-arrow']} ${styles['slider-arrow-next']}`}
      />
    ),
    prevArrow: (
      <TourSliderArrow
        customClass={`${styles['slider-arrow']} ${styles['slider-arrow-prev']}`}
      />
    )
  };

  static modalSliderSettings = {
    nextArrow: (
      <TourSliderArrow
        customClass={`${styles['slider-arrow']} ${styles['slider-arrow-next']}`}
        customStyle={{ backgroundImage: 'none' }}
      />
    ),
    prevArrow: (
      <TourSliderArrow
        customClass={`${styles['slider-arrow']} ${styles['slider-arrow-prev']}`}
        customStyle={{ backgroundImage: 'none' }}
      />
    )
  };

  render() {
    const { photos } = this.props;
    const { currentSlide } = this.state;
    return photos && (
      <div className={styles['slider']}>
        <Modal
          className={styles['modal']}
          toggle={this.toggleModal}
          isOpen={this.state.isModalOpen}
          onShow={this.setModalSlide(currentSlide)}
        >
          <Slider
            ref={slider => (this.sliderModal = slider)}
            {...TourSlider.modalSliderSettings}
          >
            {photos.map(({ url, text }, index) => (
              <TourSliderItem
                className={styles['modal-item']}
                key={index + 1}
                imgUrl={url}
                alt={text}
              />
            ))}
          </Slider>
        </Modal>
        <div className={styles['slider-big']}>
          <Slider
            afterChange={index => this.setState({ currentSlide: index })}
            asNavFor={this.sliderSmall}
            arrows={false}
            ref={slider => (this.sliderBig = slider)}
          >
            {photos.map(({ url, text }, index) => (
              <TourSliderItem
                className={styles['slider-big-item']}
                onClick={this.toggleModal}
                key={index + 1}
                imgUrl={url}
                alt={text}
              />
            ))}
          </Slider>
        </div>
        {photos.length > 1 && (
          <div>
            <Slider
              {...TourSlider.sliderSmallSettings}
              afterChange={index => this.setState({ currentSlide: index })}
              slidesToShow={photos.length - 1 || 1}
              asNavFor={this.sliderBig}
              ref={slider => (this.sliderSmall = slider)}
            >
              {photos.map(({ url, text }, index) => (
                <TourSliderItem
                  className={styles['slider-small-item']}
                  key={index + 1}
                  imgUrl={url}
                  alt={text}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    );
  }
}

export default TourSlider;
