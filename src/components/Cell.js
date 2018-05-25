import React, { Component } from 'react'

class Cell extends Component {
  renderCellByCoordinates = (coordinatePair) => (
    <div key={coordinatePair}>
      {/* to be implemented */}
    </div>
  )

  render () {
    renderCellByCoordinates(this.props.coordinatePair)
  }

}