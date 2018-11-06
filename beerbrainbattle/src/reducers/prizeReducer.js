export const prizeReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_PRIZE':
      return action.prize
    default:
      return state
  }
}