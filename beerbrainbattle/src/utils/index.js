export const fetchRandomQuestion = async () => {
  const url = 'https://opentdb.com/api.php?amount=1&type=multiple';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText)
  } else {
    const question = await response.json();
    const cleanedQuestion = cleanQuestion(question.results)
    return cleanedQuestion
  }
}

export const cleanQuestion = (question) => {
  return question.map(question => ({
      category: question.category,
      difficulty: question.difficulty,
      question: question.question,
      answers: cleanAnswers(question.correct_answer, question.incorrect_answers)
    }))
  
}

export const cleanAnswers = (correctAnswer, incorrectAnswers) => {
  const cleanCorrectAnswer = {
    answer: correctAnswer,
    correct: true,
    numVotes: 0
  }
  const cleanIncorrectAnswers = incorrectAnswers.map(answer => ({
    answer,
    correct: false,
    numVotes: 0
  }))


  const answers = [cleanCorrectAnswer, ...cleanIncorrectAnswers]



  return randomizeAnswers(answers)
}

export const randomizeAnswers = (answers) => {
    const spliceIndex = Math.floor(Math.random() * Math.floor(4));
    const correctAnswer = answers.shift();
    answers.splice(spliceIndex, 0, correctAnswer)
    return answers
}