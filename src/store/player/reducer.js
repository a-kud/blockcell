
const initialState = {
  health: 100,
  weapon: 'fists',
  attack: 7,
  level: 0,
  experience: 0
}

export default function reduce (state=initialState, action) {
  switch (action.type) {
    default: return state
  }
}