export const questionReducer = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_QUESTION':
      return action.question[0]
  
    default: 
      return state
  }
}