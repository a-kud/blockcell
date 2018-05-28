import React, { Component } from 'react'

import './Cell.css'

class Cell extends Component {
  renderCellByCoordinates = coordinates => (
    Object.keys(coordinates).map((coordinatePair) => (
        <div 
          key={coordinatePair}
          className={`cell ${coordinates[coordinatePair].type}`} 
        >
          
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