import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const keys = require('./config/keys');

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      stores: [
        { lat: 43.394348, lng: -79.822962 },
        { lat: 43.519860, lng: -79.862151 },
        { lat: 43.521502, lng: -79.865997 }
      ]
    };

  };

  displayMarkers = () => {

    return this.state.stores.map( (store, index) => {

      return <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.lng
      }}
      onClick={ () => console.log('clicked me!') }
      />

    });

  };

  render() {

    return (

      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 43.3812341, lng: -79.9099591 }}
      >
        { this.displayMarkers() }
      </Map>

    );

  }

}

export default GoogleApiWrapper({
  apiKey: keys.googleAPIKey
})(MapContainer);

