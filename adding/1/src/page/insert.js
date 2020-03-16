import React, { Component } from 'react'
import Maps from '../component/map'
import axios from 'axios'

class InsertPage extends Component {
  state = {
    name: "",
    location: {
      lat: 0,
      lng: 0
    },
    mass: 0,
    gel: 0
  }
  handleReset = (e) => {
    this.setState({ name: "", location: { lat: 0, lng: 0 }, mass: 0, gel: 0 })
  }
  handleChangeLocation = (latLng) => {
    this.setState({ location: { lat: latLng.lat(), lng: latLng.lng() } })
  }
  handleSubmit = async (e) => {
    console.log(this.state)
    axios.post('/api/insertShop', this.state).then(res => { alert(`โปรดจำรหัสร้านของคุณ : ${res.data}`) })
    this.handleReset()
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <lable>Name {this.state.name}   :</lable>
            <input id="name" type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
          </div>
          <div>
            <lable>Map [lat : {this.state.location.lat} , lng:{this.state.location.lng}]   :</lable>
            <Maps handleChangeLocation={this.handleChangeLocation}></Maps>
          </div>
          <div>
            <lable>Mass {this.state.mass}   :</lable>
            <input id="name" type="text" value={this.state.mass} onChange={(e) => { this.setState({ mass: e.target.value === "" ? 0 : parseInt(e.target.value) }) }} />

          </div>
          <div>
            <lable>Gel {this.state.gel}   :</lable>
            <input id="name" type="text" value={this.state.gel} onChange={(e) => { this.setState({ gel: e.target.value === "" ? 0 : parseInt(e.target.value) }) }} />

          </div>
          <input type="submit"></input>
        </form>
      </div >
    )
  }
}

export default InsertPage