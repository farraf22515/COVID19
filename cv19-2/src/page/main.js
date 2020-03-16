import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/Insert">Insert</Link>
        <Link to="/Update">Update</Link>
      </div>
    )
  }
}
export default Main