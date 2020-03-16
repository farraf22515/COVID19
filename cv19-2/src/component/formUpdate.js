import React, { Component } from 'react'
import axios from 'axios'

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
  render() {
    console.log(this.state.data)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <lable>Name {this.state.data.name}   :</lable>
            <input id="name" type="text" value={this.state.data.name} onChange={(e) => {
              this.setState({
                data: {
                  name: e.target.value, mass: this.state.data.mass, gel: this.state.data.gel, location: this.state.data.location
                }
              })
            }} />
          </div>
          <div>
            <lable>Mass {this.state.data.mass}   :</lable>
            <input id="name" type="number" value={this.state.data.mass} onChange={(e) => {
              console.log(this.state.data.name)
              this.setState({
                data: {
                  name: this.state.data.name, mass: parseInt(e.target.value), gel: this.state.data.gel, location: this.state.data.location
                }
              })
            }} />

          </div>
          <div>
            <lable>Gel {this.state.data.gel}   :</lable>
            <input id="name" type="text" value={this.state.data.gel} onChange={(e) => {
              this.setState({
                data: {
                  name: this.state.data.name, mass: this.state.data.mass, gel: parseInt(e.target.value), location: this.state.data.location
                }
              })
            }} />

          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default FormUpdate