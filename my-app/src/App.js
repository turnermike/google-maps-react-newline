import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const keys = require('./config/keys');

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// }


// const camelize = function(str) {

//   return str.split(' ').map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join('');

// }

// const evtNames = ['ready', 'click', 'dragend'];



// export class MapContainer extends React.Component {





//   static defaultProps = {

//     zoom: 10,
//     initialCenter: {
//       lat: 37.774929,
//       lng: -122.419416
//     },
//     centerAroundCurrentLocation: true,
//     onMove: function() {}

//   }





//   constructor(props) {

//     super(props);

//     const {lat, lng} = this.props.initialCenter;

//     this.state = {
//       currentLocation: {
//         lat: lat,
//         lng: lng
//       }
//     }

//     // this.state = {
//     //   stores: [
//     //     { lat: 43.394348, lng: -79.822962 },    // my house
//     //     { lat: 43.519860, lng: -79.862151 },    // cuddly corner
//     //     { lat: 43.521502, lng: -79.865997 }     // e.w. foster
//     //   ]
//     // };

//   };





//   componentDidUpdate(prevProps, prevState) {

//     console.log('componentDidUpdate()');

//     if( prevProps.google !== this.props.google ) {
//       this.loadMap();
//     }

//     if( prevState.currentLocation !== this.state.currentLocation ) {
//       this.recenterMap();
//     }

//   };





//   componentDidMount() {

//     console.log('componentDidMount()');

//     if( this.props.centerAroundCurrentLocation ) {

//       if( navigator && navigator.geolocation ) {

//         navigator.geolocation.getCurrentPosition( (pos) => {
//           const coords = pos.coords;
//           this.setState({
//             currentLocation: {
//               lat: coords.latitude,
//               lng: coords.longitude
//             }
//           })
//         })

//       }

//     }

//     this.loadMap();

//   };





//   loadMap() {

//     console.log('loadMap()');

//     if( this.props && this.props.google ) {

//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;
//       // console.log('maps', maps);

//       const mapRef = this.refs.map;
//       // console.log('mapRef', mapRef);
//       const mapDOMNode = ReactDOM.findDOMNode(mapRef);      // reference to actual DOM node, not the virtual DOM
//       // console.log('mapDOMNode', mapDOMNode);

//       let {initialCenter, zoom} = this.props;
//       // const {lat, lng} = initialCenter;                     // set lat, lng using props
//       const {lat, lng} = this.state.currentLocation;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(mapDOMNode, mapConfig);

//       // // basic event listener
//       // this.map.addListener('dragend', (evt) => {

//       //   this.props.onMove(this.map);
//       //   console.log('moved');
        
//       // });

//       // // event listener with timeout to prevent multiple events
//       // let centerChangedTimeout;
//       // this.map.addListener('dragend', (evt) => {

//       //   if( centerChangedTimeout ) {
//       //     clearTimeout(centerChangedTimeout);
//       //     centerChangedTimeout = null;
//       //   }

//       //   centerChangedTimeout = setTimeout(() => {
//       //     this.props.onMove(this.map);
//       //     console.log('moved');
//       //   }, 0);
        
//       // });

//       evtNames.forEach(e => {
//         // console.log('event - ', e);
//         this.map.addListener(e, this.handleEvent(e));
//       });

//       maps.event.trigger(this.map, 'ready');




//     }

//   };






//   recenterMap() {

//     const map = this.map;
//     const curr = this.state.currentLocation;
//     const google = this.props.google;
//     const maps = google.maps;

//     if( map ) {

//       let center = new maps.LatLng( curr.lat, curr.lng );
//       map.panTo( center );

//     }

//   };






//   handleEvent(evtName) {

//     // console.log('handleEvent()', evtName);

//     let timeout;
//     // const handlerName = evtName;
//     const handlerName  = `on${camelize(evtName)}`;
//     console.log('handlerName', handlerName);

//     return (e) => {

//       if( timeout ) {
//         clearTimeout( timeout );
//         timeout = null;
//       }

//       timeout = setTimeout(() => {
        
//         console.log('handleEvent timeout: ', handlerName);

//         if( this.props[handlerName] ) {
          
//           this.props[handlerName](this.props, this.map, e);
//         }

//       }, 0);



//     }

//   };






//   displayMarkers = () => {

//     return this.state.stores.map( (store, index) => {

//       return <Marker key={index} id={index} position={{
//         lat: store.lat,
//         lng: store.lng
//       }}
//       onClick={ () => console.log('clicked me!') }
//       />

//     });

//   };





//   render() {

//     return (
//       <div className="position-static" ref='map'>
//         Loading map...
//       </div>
//     )

//   } 

//   // render() {

//   //   return (

//   //     <Map
//   //       google={this.props.google}
//   //       zoom={10}
//   //       style={mapStyles}
//   //       initialCenter={{ lat: 43.3812341, lng: -79.9099591 }}
//   //     >
//   //       { this.displayMarkers() }
//   //     </Map>

//   //   );

//   // }

// }

// Map.propTypes = {
//   google: PropTypes.object,
//   zoom: PropTypes.number,
//   initialCenter: PropTypes.object,
//   centerAroundCurrentLocation: PropTypes.bool,
//   onMove: PropTypes.func
// }

// evtNames.forEach(e => (Map.propTypes[camelize(e)] = PropTypes.func));




export class Container extends React.Component {

  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }

    const initialPos = {lat: 43.394348, lng: -79.822962}
    const beerStorePos = { lat: 43.395958, lng: -79.793417}

    return (

      <div style={style}>
        <Map 
          google={this.props.google}
          zoom={10}
          initialCenter={initialPos}
        >
          {/*initialCenter marker*/}
          <Marker /> 
          <Marker position={beerStorePos} />
        </Map>
      </div>

    );

  };

} // Container Component




export default GoogleApiWrapper({
  apiKey: keys.googleAPIKey
})(Container);

