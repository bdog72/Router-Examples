import React, { Component } from 'react'
import Router1 from './Router1'
import Router2 from './Router2'

export default class App extends Component {
  render () {
    return <div>
      <Router1 />
      <hr />
      <Router2 />
      <hr />
    </div>
  }
}
