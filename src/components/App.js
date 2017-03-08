import React, { Component } from 'react'
import Router1 from './Router1'
import Router2 from './Router2'
import Router3 from './Router3'

export default class App extends Component {
  render () {
    return <div>
      <Router1 />
      <hr />
      <Router2 />
      <hr />
      <Router3 />
      <hr />
    </div>
  }
}
