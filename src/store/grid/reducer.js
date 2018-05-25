
function generateCoordinatesKeys () {
  let keys = []
  for (let x=0; x<10; x += 1) {
    for (let y=0; y<10; y += 1) {
      keys.push(`x${x}y${y}`)
    }
  }
  return keys
}

function generateInitialState () {
  const coordinateNames = generateCoordinatesKeys()
  const initialState = {cellsByCoordinates: {}}
  
  for (const coordinatePair of coordinateNames) {
    initialState.cellsByCoordinates[coordinatePair] = {type: 'stone'}
  }

  return initialState
}



export default function reduce (state=generateInitialState(), action) {
  switch (action.type) {
    default: return state
  }
}

// Selectors
export function getCellsByCoordinates (state) {
  return state.grid.cellsByCoordinates
}