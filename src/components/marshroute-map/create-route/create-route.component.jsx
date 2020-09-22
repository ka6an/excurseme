import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './create-route.css';

import GoogleMap from 'google-map-react';
import Marker from '../marker/marker.component';
import Polyline from '../polyline/polyline.component';
import SearchBox from '../search-box/search-box.component';
import CustomIcon from '../../custom-icon/custom-icon.component';

class CreateRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: [59.938043, 30.337157],
      zoom: 11,
      places: [],
      markers: [],
      paths: [],
      searchBoxChildren: [],
      bounds: null,
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null
    };

    this.addSearchBox = this.addSearchBox.bind(this);
  }

  componentDidUpdate = prevProps => {
    if (this.props.fetchedRoute !== prevProps.fetchedRoute) {
      this.initPlaces(this.props.fetchedRoute);
      this.initSearchBox(this.props.fetchedRoute);
    }
  };

  initSearchBox = routes => {
    for (const [idx, route] of routes.entries()) {
      if (idx === 0) {
        let firstSearchBox = ReactDOM.findDOMNode(this).querySelector(
          '[class*="search-box__input"]'
        );

        firstSearchBox.value = route.label;
      } else {
        this.addSearchBox(route.label);
      }
    }
  };

  initPlaces = routes => {
    for (const [idx, route] of routes.entries()) {
      let place = {
        geometry: {
          location: {
            lat: function() {
              return route.latitude;
            },
            lng: function() {
              return route.longitude;
            },
            searchBoxId: idx
          }
        },
        formatted_address: route.label
      };

      this.addPlace(place, idx);
    }
  };

  getRoutes = () => {
    let routes = [];
    for (const place of this.state.places) {
      routes.push({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        label: place.formatted_address,
        searchBoxId: place.searchBoxId
      });
    }

    return routes;
  };

  apiLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    });
    this.addSearchBox();
  };

  renderPaths = () => {
    return (
      <Polyline
        map={this.state.mapInstance}
        maps={this.state.mapApi}
        paths={this.state.paths}
      />
    );
  };

  addPlace = (place, searchBoxId) => {
    const nextMarker = place.geometry.location;

    nextMarker.address = place.formatted_address;
    nextMarker.searchBoxId = searchBoxId;

    const nextCenter = {
      lat: Number(nextMarker.lat()),
      lng: Number(nextMarker.lng())
    };

    const path = {
      lat: Number(nextMarker.lat()),
      lng: Number(nextMarker.lng()),
      searchBoxId: searchBoxId
    };

    place.searchBoxId = searchBoxId;

    this.setState(state => {
      const markers = state.markers.concat(nextMarker);
      const places = state.places.concat(place);
      const paths = state.paths.concat(path);

      return {
        places,
        center: nextCenter,
        markers,
        paths
      };
    });
  };

  isExistEmptySearchBoxes = () => {
    return this.state.places.length >= this.state.searchBoxChildren.length;
  };

  changePlace = (currentPlace, searchBoxId) => {
    this.setState(state => {
      const places = state.places.map(place => {
        if (place.searchBoxId === searchBoxId) {
          place = currentPlace;
          place.searchBoxId = searchBoxId;
        }
        return place;
      });

      const markers = state.markers.map(marker => {
        if (marker.searchBoxId === searchBoxId) {
          marker = currentPlace.geometry.location;
          marker.address = currentPlace.formatted_address;
          marker.searchBoxId = searchBoxId;
        }
        return marker;
      });

      const paths = state.paths.map(path => {
        if (path.searchBoxId === searchBoxId) {
          path.lat = currentPlace.geometry.location.lat();
          path.lng = currentPlace.geometry.location.lng();
          path.searchBoxId = searchBoxId;
        }
        return path;
      });

      return {
        places,
        markers,
        paths
      };
    });
  };

  removePlace = searchBoxId => {
    this.setState(state => {
      const places = state.places.filter(place => {
        return place.searchBoxId !== searchBoxId;
      });

      const markers = state.markers.filter(marker => {
        return marker.searchBoxId !== searchBoxId;
      });

      const paths = state.paths.filter(path => {
        return path.searchBoxId !== searchBoxId;
      });

      return {
        places,
        markers,
        paths
      };
    });
  };

  addSearchBox = value => {
    this.setState(state => {
      return {
        searchBoxChildren: [
          ...state.searchBoxChildren,
          <SearchBox
            key={state.searchBoxChildren.length}
            value={value || ''}
            searchBoxId={state.searchBoxChildren.length}
            map={state.mapInstance}
            mapApi={state.mapApi}
            addplace={this.addPlace}
            changePlace={this.changePlace}
            isExistEmptySearchBoxes={this.isExistEmptySearchBoxes}
            removeSearchBox={this.removeSearchBox}
            removePlace={this.removePlace}
          />
        ]
      };
    });
  };

  removeSearchBox = searchBoxId => {
    this.setState(state => {
      const searchBoxChildren = state.searchBoxChildren.filter(searchBox => {
        return searchBox.props.searchBoxId !== searchBoxId;
      });
      return {
        searchBoxChildren
      };
    });

    this.removePlace(searchBoxId);
  };

  render() {
    const {
      center,
      zoom,
      places,
      markers,
      searchBoxChildren,
      mapApiLoaded,
      mapInstance,
      mapApi
    } = this.state;

    return (
      <div className={styles['create-route-wrap']}>
        <div className={styles['map']}>
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyA6xOIOPn0eNS3s2LDxp9vSXNRP0IvoKFs',
              language: 'ru',
              libraries: ['places', 'drawing', 'geometry']
            }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={center}
            defaultZoom={zoom}
            onGoogleApiLoaded={({ map, maps }) => {
              this.apiLoaded(map, maps);
            }}
          >
            {markers.map(({ lat, lng, address }, index) => (
              <Marker
                key={index}
                lat={lat()}
                lng={lng()}
                label={String.fromCharCode(index + 65)}
                address={address}
              />
            ))}
            {mapApiLoaded && this.renderPaths()}
          </GoogleMap>
        </div>
        {mapApiLoaded && (
          <div className={styles['search-box-list']}>
            {searchBoxChildren}
            {this.isExistEmptySearchBoxes() && (
              <button
                className={styles['search-box__btn-add']}
                onClick={this.addSearchBox}
              >
                <CustomIcon
                  className={styles['search-box__btn-icon']}
                  iconName='plus-circle-red'
                />
                Добавить пункт
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default CreateRoute;
