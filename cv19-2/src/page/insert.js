import React, { Component } from 'react'
import Maps from '../component/map'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './grid_template.css'


class InsertPage extends Component {
  state = {
    name: "",
    store_name: "",
    phar_name: "",
    phar_id: "",
    location: {
      lat: 0,
      lng: 0
    },
    mask: 0,
    gel: 0
  }
  handleReset = (e) => {
    this.setState({ name: "", store_name: "", phar_name: "", phar_id: "", location: { lat: 0, lng: 0 }, mask: 0, gel: 0 })
  }
  handleSubmit = async (e) => {
    console.log(this.state)
    axios.defaults.baseURL = "https://us-central1-covid19-1013d.cloudfunctions.net/app"
    axios.post('/api/insertShop', this.state).then(res => { alert(`โปรดจำรหัสร้านของคุณ : ${res.data}`) })
    this.handleReset()
    e.preventDefault()
  }

  handleChangeLocation = (latLng) => {
    this.setState({ location: { lat: latLng.lat().toFixed(4), lng: latLng.lng().toFixed(4) } })
  }

  render() {
    return (
      <div className="card" >

        <div class="card-header">New information</div>

        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="colForm" style={{ gridArea: "colForm" }}>
            <div>
              <div className="input-group mb-3">
                <lable className="input-group-prepend">
                  <div className="input-group-text" style={{ width: "150px" }}>
                    Store Name
                    </div>
                </lable>
                <input className="form-control" id="store_name" type="text" onChange={(e) => { this.setState({ store_name: e.target.value }) }} />
              </div>

              <div className="input-group mb-3">
                <lable className="input-group-prepend">
                  <div className="input-group-text" style={{ width: "150px" }}>
                    Pharmacist Name
                    </div>
                </lable>
                <input className="form-control" id="phar_name" type="text" onChange={(e) => { this.setState({ phar_name: e.target.value }) }} />
              </div>

              <div className="input-group mb-3">
                <lable className="input-group-prepend">
                  <div className="input-group-text" style={{ width: "150px" }}>
                    Pharmacist ID
                    </div>
                </lable>
                <input className="form-control" id="phar_id" type="text" onChange={(e) => { this.setState({ phar_id: e.target.value }) }} />
              </div>


              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Mask</span>
                </div>

                <input className="form-control" style={{ width: "40%" }} id="name" type="text" onChange={(e) => { this.setState({ mask: e.target.value == "" ? 0 : parseInt(e.target.value) }) }} />

                <div className="input-group-prepend">
                  <span className="input-group-text">Gel</span>
                </div >

                <input className="form-control" id="name" type="text" onChange={(e) => { this.setState({ gel: e.target.value == "" ? 0 : parseInt(e.target.value) }) }} />
              </div>
            </div>
          </div>

          <div className="colMap" style={{ gridArea: "colMap" }}>
            <Maps handleChangeLocation={this.handleChangeLocation}> </Maps>
          </div>

          <div className="colBtn row" style={{ gridArea: "colBtn" }}>
            <div className="col-3"><input className="btn btn-primary" type="submit"></input> </div>
            <Link to="/" className="col-3"><div className="btn btn-secondary"  >Cencel</div> </Link>
          </div>

        </form>
      </div >
    )
  }
}

export default InsertPage