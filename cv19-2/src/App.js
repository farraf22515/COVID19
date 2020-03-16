import React, { Component } from 'react'
import InsertPage from './page/insert'
import Main from './page/main'
import Update from './page/update'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    axios.defaults.baseURL = "https://us-central1-covid19-1013d.cloudfunctions.net/app"
    return (
      <Router>
        <Switch>
          <Route path="/Insert">
            <InsertPage />
          </Route>
          <Route path="/Update">
            <Update />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App