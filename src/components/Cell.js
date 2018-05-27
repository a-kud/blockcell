import React, { Component } from 'react'

class Cell extends Component {
  renderCellByCoordinates = coordinates => (
    Object.keys(coordinates).map((coordinatePair) => (
        <div 
          key={coordinatePair}
          className={coordinates[coordinatePair].type} 
        >
          Cell
        </div>
      )
    )
  )

  render () {
   return this.renderCellByCoordinates(this.props.cellsByCoordinates)
  }

}

export default Cell