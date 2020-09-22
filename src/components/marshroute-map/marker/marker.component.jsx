import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './marker.css';

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.lat,
      lng: props.lng,
      label: props.label,
      address: props.address,
      isInfoWindowOpen: false
    }
  }

  toggleInfoWindow = e => {
    e.stopPropagation();
 
    this.setState({ isInfoWindowOpen: !this.state.isInfoWindowOpen }); 
  }

  componentDidUpdate(prevProps) {
    if (this.props.address !== prevProps.address) {
      this.setState((state, props) => {
        return {
          lat: props.lat,
          lng: props.lng,
          address: props.address
        }
      });
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('click', this.toggleInfoWindow);
    ReactDOM.findDOMNode(this).addEventListener('mousedown', this.toggleInfoWindow);
    ReactDOM.findDOMNode(this).addEventListener('touchstart', this.toggleInfoWindow);
    ReactDOM.findDOMNode(this).addEventListener('pointerdown', this.toggleInfoWindow);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('click', this.toggleInfoWindow);
    ReactDOM.findDOMNode(this).removeEventListener('mousedown', this.toggleInfoWindow);
    ReactDOM.findDOMNode(this).removeEventListener('touchstart', this.toggleInfoWindow);
    ReactDOM.findDOMNode(this).removeEventListener('pointerdown', this.toggleInfoWindow);
  }

  render() {
    const {
      lat,
      lng,
      label,
      address,
      isInfoWindowOpen
    } = this.state;

    return (
      <>
        <div className={styles['marker']}>
          {label}
        </div>
        {isInfoWindowOpen &&
          <div className={styles['info-window']}>
            <p className={styles['info-window__text']}>
              {`${address}, ${lat}, ${lng}`}
            </p>
          </div>
        }
      </>
    );
  } 
};

export default Marker;