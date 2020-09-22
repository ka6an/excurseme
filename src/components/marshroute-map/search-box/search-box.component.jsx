import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import formStyles from '../../form-components/form.css'
import styles from './search-box.css';
import CustomIcon from '../../custom-icon/custom-icon.component';

class SearchBox extends Component {
  static propTypes = {
    mapApi: PropTypes.shape({
      places: PropTypes.shape({
        SearchBox: PropTypes.func,
      }),
      event: PropTypes.shape({
        clearInstanceListeners: PropTypes.func,
      }),
    }).isRequired,
    onPlacesChanged: PropTypes.func,
  };

  static defaultProps = {
    onPlacesChanged: null
  };

  constructor(props) {
    super(props);

    this.state = {
      searchBoxId: props.searchBoxId,
      removePlace: props.removePlace,
      value: props.value
    }

    this.onRemoveSearchBox = this.onRemoveSearchBox.bind(this);
    this.onCheckInputValue = this.onCheckInputValue.bind(this);
  }

  componentDidMount({ map, mapApi, value } = this.props) {
    this.searchBox = new mapApi.places.SearchBox(this.searchInput);
    this.searchBoxListener = this.searchBox.addListener('places_changed', this.onPlacesChanged);
    this.searchBox.bindTo('bounds', map);
    this.searchInput.focus();
    this.searchInput.value = value.length && value.length > 0 ? value : '';
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.removeListener(this.searchBoxListener);
  }

  onCheckInputValue = ({removePlace, searchBoxId } = this.props) => {
    if (this.searchInput.value.length === 0) {
      removePlace(searchBoxId);
    }
  }

  onPlacesChanged = ({ map, addplace, changePlace, isExistEmptySearchBoxes, searchBoxId } = this.props) => {
    const place = this.searchBox.getPlaces()[0];

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    if (!isExistEmptySearchBoxes()) {
      addplace(place, searchBoxId);
    } else {
      changePlace(place, searchBoxId);
    }
  };

  onRemoveSearchBox = searchBoxId => {
    this.props.removeSearchBox(searchBoxId);
  }

  render() {
    const {
      searchBoxId
    } = this.state;

    return (
      <div className={styles['search-box-item']}>
        <input
          className={`${formStyles['input']} ${styles['search-box__input']}`}
          ref={(ref) => {
            this.searchInput = ref;
          }}
          type="text"
          onChange={() => this.onCheckInputValue()}
        />
        {searchBoxId !== 0 && 
          <button
            className={styles['search-box__btn-remove']}
            onClick={() => this.onRemoveSearchBox(searchBoxId)}
          >
          <CustomIcon iconName='close-gray' />
          </button>
        }
      </div>
    );
  }
}

export default SearchBox;