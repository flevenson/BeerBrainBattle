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

export const filterPlayers = (players) => ({
  type: 'FILTER_PLAYERS',
  players
})

export const addPrize = (prize) => ({
  type: 'ADD_PRIZE',
  prize
})