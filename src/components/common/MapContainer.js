import React from 'react';
import { string } from 'prop-types';
import GoogleMapReact from 'google-map-react';
import PositionMarker from 'components/common/PositionMarker';

class MapContainer extends React.Component {
  static defaultProps = {
    key: process.env.GOOGLE_MAPS_KEY
  };

  constructor(props) {
    super(props);
    this.state = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 16
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        this.setState({ center: { lat: latitude, lng: longitude } });
      });
    }
  }

  render() {
    const { center, zoom } = this.state;

    return (
      <div className="google-maps-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.key }}
          center={center}
          defaultZoom={zoom}
        >
          <PositionMarker
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

MapContainer.propTypes = {
  key: string,
  lat: string.isRequired,
  lng: string.isRequired
};

export default MapContainer;
