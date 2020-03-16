import React, { Component } from "react";
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from "react-google-maps";



class Map extends Component {
  state = {
    markers: []
  };
  handleClick = event => {
    this.props.handleChange(event.latLng)
    console.log(this.state);
    const markers = this.state.markers;
    const marker = {
      position: event.latLng,
      defaulltAnimation: 1,
      key: "select"
    };
    markers.pop();
    markers.push(marker);
    this.setState({ markers: markers });
  };
  render() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 13.745541, lng: 100.533135 }}
        onClick={event => {
          this.handleClick(event);
        }}
      >
        {this.state.markers.map(doc => (
          <Marker {...doc} />
        ))}
      </GoogleMap>
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class Maps extends Component {
  handleChange = (latLng) => {
    console.log(latLng.lat());
    console.log(latLng.lng());
    this.props.handleChangeLocation(latLng)
  }
  render() {
    return (
      <div className="App">
        <h1>Mappp</h1>
        {console.log(process.env.KEY)}
        <div style={{ width: "100vw", height: "100vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAEMhMOkW6z6JvsdOSxAcbGlLFujGLQhFQ`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            handleChange={this.handleChange}
          />
        </div>
      </div >
    );
  }
}
export default Maps