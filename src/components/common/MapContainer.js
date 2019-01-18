import React from 'react';
import { string, any } from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import TargetList from './TargetList';

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
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(event) {
    console.log('click!');
    console.log(event);
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

    const { list } = [center];

    return (
      <div className="google-maps-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.key }}
          center={center}
          defaultZoom={zoom}
          onClick={this.handleOnClick}
        >
          <TargetList targetList={list} />
        </GoogleMapReact>
      </div>
    );
  }
}

MapContainer.propTypes = {
  key: string,
  lat: string.isRequired,
  lng: string.isRequired,
  targetList: any
};

const mapStateToProps = state => ({
  targetList: state.getIn(['session', 'user']).toJS()
});

export default connect(mapStateToProps)(MapContainer);
