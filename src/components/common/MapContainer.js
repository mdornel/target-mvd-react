import React from 'react';
import { number, string } from 'prop-types';
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
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ center: { lat: position.coords.latitude, lng: position.coords.longitude } });
      });
    }
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.key }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <PositionMarker
            lat={this.state.center.lat}
            lng={this.state.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

MapContainer.propTypes = {
  key: string,
  lat: number.isRequired,
  lng: number.isRequired
};

export default MapContainer;
