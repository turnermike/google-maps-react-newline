import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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
        { lat: 43.394348, lng: -79.822962 },    // my house
        { lat: 43.519860, lng: -79.862151 },    // cuddly corner
        { lat: 43.521502, lng: -79.865997 }     // e.w. foster
      ]
    };

  };

  componentDidUpdate(prevProps, prevState) {

    console.log('componentDidUpdate()');

    if ( prevProps.google !== this.props.google ) {


      this.loadMap();

    }

  };

  componentDidMount() {

    console.log('componentDidMount()');

    this.loadMap();

  };

  loadMap() {

    console.log('loadMap()');

    if( this.props && this.props.google ) {

      // google is available
      const {google} = this.props;
      const maps = google.maps;
      // console.log('maps', maps);

      const mapRef = this.refs.map;
      // console.log('mapRef', mapRef);
      const mapDOMNode = ReactDOM.findDOMNode(mapRef);      // reference to actual DOM node, not the virtual DOM
      console.log('mapDOMNode', mapDOMNode);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(mapDOMNode, mapConfig);      


    }

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
      <div className="position-static" ref='map'>
        Loading map...
      </div>
    )

  } 

  // render() {

  //   return (

  //     <Map
  //       google={this.props.google}
  //       zoom={10}
  //       style={mapStyles}
  //       initialCenter={{ lat: 43.3812341, lng: -79.9099591 }}
  //     >
  //       { this.displayMarkers() }
  //     </Map>

  //   );

  // }

}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
}

Map.defaultProps = {
  zoom: 13,
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
}

export default GoogleApiWrapper({
  apiKey: keys.googleAPIKey
})(MapContainer);

