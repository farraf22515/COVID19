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
          <label for="id" >Id : </label>
          <input type="text" onChange={(e) => { this.setState({ id: e.target.value }) }}></input>
          <input type="submit"></input>
        </form>
        {
          (this.state.data !== undefined) ? <FormUpdate data={this.state.data} /> : <h1>Plese Enter Again</h1>
        }
      </div>
    )
  }
}

export default Update