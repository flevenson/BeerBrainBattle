export const playersReducer = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_PLAYERS':
      return action.players
    case 'FILTER_PLAYERS':
      return action.players
    default: 
      return state
  }
}