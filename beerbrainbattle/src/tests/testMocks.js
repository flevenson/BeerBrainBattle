export const mockQuestion = [{
  category: 'Math',
  difficulty: 'Easy',
  question: 'What is Two plus Two',
  isCorrectlyAnswered: false,
  answers: [
    {answer: '5', correct: false, numVotes: 0},
    {answer: '2', correct: false, numVotes: 0},
    {answer: '4', correct: true, numVotes: 0},
    {answer: '0', correct: false, numVotes: 0} ]
}]

export const mockVotedQuestion = [{
  category: 'Math',
  difficulty: 'Easy',
  question: 'What is Two plus Two',
  isCorrectlyAnswered: false,
  answers: [
    {answer: '5', correct: false, numVotes: 0},
    {answer: '2', correct: false, numVotes: 1},
    {answer: '4', correct: true, numVotes: 0},
    {answer: '0', correct: false, numVotes: 0} ]
}]


export const mockPlayers = 4

export const mockAnswer = {answer:'2',  correct: false, numVotes: 1}

export const mockPrize = '1 Whole Beer'