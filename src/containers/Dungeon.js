import React, { Component } from 'react'
import { connect } from 'react-redux'

import Cell from '../components/Cell'
import * as gridSelectors from '../store/grid/reducer'
import './Dungeon.css'

class Dungeon extends Component {
  render () {
    return (
      <div className='dungeon-grid'>
        <Cell cellsByCoordinates={this.props.cellsByCoordinates}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cellsByCoordinates: gridSelectors.getCellsByCoordinates(state)
})

export default connect(mapStateToProps)(Dungeon)