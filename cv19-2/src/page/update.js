import React, { Component } from 'react'
import axios from 'axios'
import FormUpdate from '../component/formUpdate'

class Update extends Component {
  state = {
    id: ""
  }
  handleSubmit = (e) => {
    this.setState({ data: undefined })
    console.log(this.state.id)
    // axios.defaults.baseURL = "https://us-central1-covid19-1013d.cloudfunctions.net/app"
    axios.get(`/api/shop/${this.state.id}`).then((res) => {
      if (res.data !== "") {
        console.log(res.data)
        var dat = {
          id: this.state.id,
          data: res.data
        }
        this.setState({ data: dat })
      }
      else {
        alert("Please Enter Again")
      }
    })
    console.log(this.state.data)
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3" style={{ "width": "300px" }}>
            <div className="input-group-prepend">
              <span for="id" className="input-group-text">ID</span>
            </div>
            <input class="form-control" type="text" onChange={(e) => { this.setState({ id: e.target.value }) }}></input>

            <div style={{ "width": "25%" }} >
              <input class="form-control" type="submit" ></input>
            </div>
          </div>
        </form>
        {
          (this.state.data !== undefined) ? <FormUpdate data={this.state.data} /> : <h1>Plese Enter Again</h1>
        }
      </div>
    )
  }
}

export default Update