const DUNGEON_WIDTH = 80
const DUNGEON_HEIGHT = 45

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
  initialState.dungeonWidth = 80
  initialState.dungeonHeight = 45

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

export function getDungeonWidth (state) {
  return state.grid.dungeonWidth
}

export function getDungeonHeight (state) {
  return state.grid.dungeonHeight
}
