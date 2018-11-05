export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
})

export const addPlayers = (players) => ({
  type: 'ADD_PLAYERS',
  players
})

export const addVote = (answer) => ({
  type: 'ADD_VOTE',
  answer
})