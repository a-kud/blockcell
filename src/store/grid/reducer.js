
const generateCoordinatesKeys =  () => {
  let keys = []
  for (let x=0; x<10; x += 1) {
    for (let y=0; y<10; y += 1) {
      keys.push(`x${x}y${y}`)
    }
  }
  return keys
}

const initialState = {
  cellsByCoordinates: {

  }
}

export default function reduce (state=initialState, action) {
  switch (action.type) {
    default: return state
  }
}