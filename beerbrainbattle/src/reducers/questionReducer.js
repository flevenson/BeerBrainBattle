export const questionReducer = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_QUESTION':
      return action.question[0]
  
    case 'ADD_VOTE':
      const newAnswers = state.answers.map(answer => {
        if(answer.answer === action.answer) {
          answer = {
            ...answer,
            numVotes: answer.numVotes += 1
          }
        }
        return answer
        })
      const newState = { ...state, answers: newAnswers}
      return newState
    default: 
      return state
  }
}