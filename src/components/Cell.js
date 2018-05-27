import React, { Component } from 'react'

class Cell extends Component {
  renderCellByCoordinates = coordinates => (
    Object.keys(coordinates).map((coordinatePair) => (
        <div 
          key={coordinatePair}
          className={`cell ${coordinates[coordinatePair].type}`} 
        >
          Cell
        </div>
      )
    )
  )

  render () {
   const cellsMap = this.renderCellByCoordinates(
     this.props.cellsByCoordinates
    )

    return cellsMap
  }

}

export default Cell