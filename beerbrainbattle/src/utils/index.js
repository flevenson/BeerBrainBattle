export const fetchRandomQuestion = async () => {
  const url = 'https://opentdb.com/api.php?amount=1';
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
  }
  const cleanIncorrectAnswers = incorrectAnswers.map(answer => ({
    answer,
    correct: false
  }))
  const answers = [cleanCorrectAnswer, ...cleanIncorrectAnswers]
  return answers
}