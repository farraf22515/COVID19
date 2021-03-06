import React, { Component } from "react";
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from "react-google-maps";



class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      markers: []
    };
    navigator.geolocation.getCurrentPosition(this.position)
    console.log(this.props)
    if (this.props.location) {
      this.setState({ lat: this.props.location.lat, lng: this.props.location.lng })
    }
    const markers = this.state.markers;
    const marker = {
      position: {
        lat: this.state.lat === 0 ? 13.745377 : this.state.lat,
        lng: this.state.lng === 0 ? 100.534156 : this.state.lng
      },
      defaulltAnimation: 1,
      key: "select"
    }
    markers.push(marker)
  }
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
    markers.push(marker)
    this.setState({ markers: markers });
  };
  position = (pos) => {
    console.log("position")
    console.log(pos)
    this.setState({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    this.props.handleCurrentPosition(pos.coords.latitude, pos.coords.longitude)
  }
  render() {
    // console.log(this.state.lat, this.state.lng)
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: this.state.lat === 0 ? 13.745377 : this.state.lat, lng: this.state.lng === 0 ? 100.534156 : this.state.lng }}
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
  state = {
    lat: 0,
    lng: 0
  }
  handleChange = (latLng) => {
    console.log(latLng.lat());
    console.log(latLng.lng());
    this.setState({ lat: latLng.lat().toFixed(4), lng: latLng.lng().toFixed(4) })
    this.props.handleChangeLocation(latLng)
  }

  handleCurrentPosition = (lat, lng) => {
    this.setState({ lat: lat, lng: lng })
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: "100%", height: "80vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAEMhMOkW6z6JvsdOSxAcbGlLFujGLQhFQ`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            handleChange={this.handleChange}
            handleCurrentPosition={this.handleCurrentPosition}
          />
        </div>
        <h4>latitude : {this.state.lat} , longitude : {this.state.lng}</h4>
      </div >
    );
  }
}
export default Maps