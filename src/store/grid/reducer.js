const DUNGEON_WIDTH = 40
const DUNGEON_HEIGHT = 25

function generateCoordinatesKeys () {
  let keys = []
  for (let x = 0; x < DUNGEON_WIDTH; x += 1) {
    for (let y = 0; y < DUNGEON_HEIGHT; y += 1) {
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