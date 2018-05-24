import React, { Component } from 'react'

import Dungeon from './containers/Dungeon'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Blockcell Game</h1>
        <Dungeon />
      </div>   
    );
  }
}

export default App;
