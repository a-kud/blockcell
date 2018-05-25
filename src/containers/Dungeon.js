import React, { Component } from 'react'
import { connect } from 'react-redux'

import Cell from '../components/Cell'
import './Dungeon.css'

class Dungeon extends Component {
  render () {
    return (
      <div className='dungeon-grid'>
        <Cell />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Dungeon)