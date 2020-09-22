import React, { useState } from 'react'
import GoogleMap from 'google-map-react'

import Marker from './marker/marker.component'
import Polyline from './polyline/polyline.component'

import styles from './marshroute-map.css';
import groupStyles from '../../pages/profile/profile-body/profile-content/profile-bio-item/profile-bio-item.css'

class Map extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      center: [59.938043, 30.337157],
      zoom: 11
    }
  }

  onMapLoaded (map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      ...this.state,
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.route) {
      bounds.extend(
        new maps.LatLng(marker.latitude, marker.longitude)
      )
    }
    map.fitBounds(bounds)
  }

  renderPaths = () => {
    let paths = [];
    for (const [idx, path] of this.props.route.entries()) {
      paths.push({
        lat: path.latitude,
        lng: path.longitude
      });
    }

    return (
      <Polyline
        map={this.state.mapInstance}
        maps={this.state.mapApi}
        paths={paths} />
    )
  }

  render () {
    const route = this.props.route;
    const {
      center,
      zoom,
      mapApiLoaded
    } = this.state;

    return (
      <div className={groupStyles['group']}>
        <h2 className={groupStyles['group__label']}>Маршрут</h2>
        <ul className={styles['route-list']}>
          {route.map(({ label, latitude, longitude }, index) => (
            <li key={index + 1} className={styles['route-item']}>
              <p className={styles['route-item__marker']}>
                {String.fromCharCode(index + 65)}
              </p>
              <p className={styles['route-item__text']}>
                {`${label}, ${latitude}, ${longitude}`}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles['map-wrap']}>
          <GoogleMap
            // Insert correct key 
            bootstrapURLKeys={{key: ''}}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={center}
            defaultZoom={zoom}
            onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
            {route.map(({ label, latitude, longitude }, index) => (
              <Marker
                key={index + 1}
                lat={latitude}
                lng={longitude}
                label={String.fromCharCode(index + 65)}
                address={label}
              />
            ))}
            {mapApiLoaded && this.renderPaths()}
          </GoogleMap>
        </div>
      </div>
    )
  }
}

export default Map
