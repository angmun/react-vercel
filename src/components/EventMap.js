import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

export default class EventMap extends Component {
  render() {
    return (
      <div
        aria-label='View event locations on a map'
        role='region'
        className='shadow-card event-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS }}
          defaultCenter={this.props.mapCenter}
          defaultZoom={this.props.defaultZoom}
        />
      </div>
    );
  }
}

EventMap.propTypes = {
  mapCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  defaultZoom: PropTypes.number,
};

EventMap.defaultProps = {
  mapCenter: {
    lat: 59.95,
    lng: 30.33,
  },
  defaultZoom: 11,
};
