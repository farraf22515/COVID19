import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../page/grid_template.css'
import Maps from './map'

class FormUpdate extends Component {
  state = {
    id: this.props.data.id,
    data: this.props.data.data
  }

  handleSubmit = (e) => {
    // axios.defaults.baseURL = "https://us-central1-covid19-1013d.cloudfunctions.net/app"
    axios.post('/api/updateShop', this.state).then((res) => { alert(`Success`) })
    e.preventDefault()
  }

  handleChangeLocation = (latLng) => {
    this.setState({
      data: {
        store_name: this.state.data.store_name,
        phar_id: this.state.data.phar_id,
        phar_name: this.state.data.phar_name,
        mask: this.state.data.mask,
        mask_p: this.state.data.mask_p,
        gel: this.state.data.gel,
        gel_p: this.state.data.gel_p,
        location: { lat: latLng.lat().toFixed(4), lng: latLng.lng().toFixed(4) }
      }
    });
    console.log(this.state.data);
  }

  componentWillMount() {
    this.setState({
      data: {
        store_name: this.state.data.store_name,
        phar_id: this.state.data.phar_id,
        phar_name: this.state.data.phar_name,
        mask: this.state.data.mask,
        mask_p: this.state.data.mask_p,
        gel: this.state.data.gel,
        gel_p: this.state.data.gel_p,
        location: this.state.data.location
      }
    });
    console.log(this.state);
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="card">
        <div className="card-header">Update Information</div>

        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="colForm" style={{ gridArea: "colForm" }}>

            <div>
              <div className="input-group mb-3">
                <lable className="input-group-prepend">
                  <div className="input-group-text" style={{ width: "150px" }}>
                    Store Name
                    </div>
                </lable>
                <input className="form-control" id="store_name" type="text"
                  value={this.state.data.store_name}
                  onChange={(e) => {
                    this.setState({
                      data: {
                        store_name: e.target.value,
                        phar_id: this.state.data.phar_id,
                        phar_name: this.state.data.phar_name,
                        mask: this.state.data.mask,
                        mask_p: this.state.data.mask_p,
                        gel: this.state.data.gel,
                        gel_p: this.state.data.gel_p,
                        location: this.state.data.location
                      }
                    })
                  }} />
              </div>

              <div className="input-group mb-3">
                <lable className="input-group-prepend">
                  <div className="input-group-text" style={{ width: "150px" }}>
                    Pharmacist Name
                    </div>
                </lable>
                <input className="form-control" id="phar_name" type="text"
                  value={this.state.data.phar_name}
                  onChange={(e) => {
                    this.setState({
                      data: {
                        store_name: this.state.data.store_name,
                        phar_id: this.state.data.phar_id,
                        phar_name: e.target.value,
                        mask: this.state.data.mask,
                        mask_p: this.state.data.mask_p,
                        gel: this.state.data.gel,
                        gel_p: this.state.data.gel_p,
                        location: this.state.data.location
                      }
                    })
                  }} />
              </div>

              <div className="input-group mb-3">
                <lable className="input-group-prepend">
                  <div className="input-group-text" style={{ width: "150px" }}>
                    Pharmacist ID
                    </div>
                </lable>
                <input className="form-control" id="phar_id" type="text"
                  value={this.state.data.phar_id}
                  onChange={(e) => {
                    this.setState({
                      data: {
                        store_name: this.state.data.store_name,
                        phar_id: e.target.value,
                        phar_name: this.state.data.phar_name,
                        mask: this.state.data.mask,
                        mask_p: this.state.data.mask_p,
                        gel: this.state.data.gel,
                        gel_p: this.state.data.gel_p,
                        location: this.state.data.location
                      }
                    })
                  }}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Mask</span>
              </div>
              <input className="form-control" style={{ width: "40%" }} id="name" type="text"
                value={this.state.data.mask}
                onChange={(e) => {
                  this.setState({
                    data: {
                      store_name: this.state.data.store_name,
                      phar_id: this.state.data.phar_id,
                      phar_name: this.state.data.phar_name,
                      mask: e.target.value == "" ? 0 : parseInt(e.target.value),
                      mask_p: this.state.data.mask_p,
                      gel: this.state.data.gel,
                      gel_p: this.state.data.gel_p,
                      location: this.state.data.location
                    }
                  })
                }} />


              <div className="input-group-prepend">
                <span className="input-group-text">Gel</span>
              </div >
              <input className="form-control" id="name" type="text"
                value={this.state.data.gel}
                onChange={(e) => {
                  this.setState({
                    data: {
                      store_name: this.state.data.store_name,
                      phar_id: this.state.data.phar_id,
                      phar_name: this.state.data.phar_name,
                      mask: this.state.data.mask,
                      mask_p: this.state.data.mask_p,
                      gel: e.target.value == "" ? 0 : parseInt(e.target.value),
                      gel_p: this.state.data.gel_p,
                      location: this.state.data.location
                    }
                  })
                }} />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Mask Price</span>
              </div>
              <input className="form-control" style={{ width: "40%" }} id="name" type="text"
                value={this.state.data.mask_p}
                onChange={(e) => {
                  this.setState({
                    data: {
                      store_name: this.state.data.store_name,
                      phar_id: this.state.data.phar_id,
                      phar_name: this.state.data.phar_name,
                      mask: this.state.data.mask,
                      mask_p: e.target.value == "" ? 0 : parseInt(e.target.value),
                      gel: this.state.data.gel,
                      gel_p: this.state.data.gel_p,
                      location: this.state.data.location
                    }
                  })
                }} />


              <div className="input-group-prepend">
                <span className="input-group-text">Gel Price</span>
              </div >
              <input className="form-control" id="name" type="text"
                value={this.state.data.gel_p}
                onChange={(e) => {
                  this.setState({
                    data: {
                      store_name: this.state.data.store_name,
                      phar_id: this.state.data.phar_id,
                      phar_name: this.state.data.phar_name,
                      mask: this.state.data.mask,
                      mask_p: this.state.data.mask_p,
                      gel: this.state.data.gel,
                      gel_p: e.target.value == "" ? 0 : parseInt(e.target.value),
                      location: this.state.data.location
                    }
                  })
                }} />
            </div>

          </div>

          <div className="colMap" style={{ gridArea: "colMap" }}>
            <Maps handleChangeLocation={this.handleChangeLocation} location={{ lat: this.state.data.location.lat, lng: this.state.data.location.lng }}> </Maps>
          </div>

          <div className="colBtn row" style={{ gridArea: "colBtn" }}>
            <div className="col-3"><input className="btn btn-primary" type="submit" value="update"></input> </div>
            <Link to="/" className="col-3"><div className="btn btn-secondary"  >Cencel</div> </Link>
          </div>

        </form>
      </div>
    )
  }
}

export default FormUpdate