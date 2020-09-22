import React, { Component } from 'react';

class Polyline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paths: props.paths,
      map: props.map,
      maps: props.maps
    };
  }

  static line = [];

  renderPolylines() {
    const { paths, map, maps } = this.props;
    const location = [];

    paths &&
      paths.length &&
      paths.map(({ label, lat, lng }, index) =>
        location.push({
          lat: Number(lat),
          lng: Number(lng)
        })
      );

    if (Polyline.line[0]) {
      Polyline.line[0].setMap(null);
    }

    let line = new maps.Polyline({
      path: location,
      geodesic: false,
      strokeColor: '#1a1e25',
      strokeWeight: 1
    });

    Polyline.line[0] = line;
    Polyline.line[0].setMap(map);
  }

  render() {
    this.renderPolylines();

    return null;
  }
}

export default Polyline;
