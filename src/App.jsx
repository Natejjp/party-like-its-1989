import React, { Component } from 'react'

export class App extends Component {
  state = {}
  render() {
    return (
      <main>
        <h1>Movie Database</h1>
        <ul>
          <li>
            <input type="text" value={this.state.id} />
          </li>
          <li>Movie Title</li>
          <li>Poster Image</li>
          <li>Plot Overview</li>
        </ul>
      </main>
    )
  }
}
