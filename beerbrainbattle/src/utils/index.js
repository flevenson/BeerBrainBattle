import { categoriesIDs } from '../assets/BeerData.js'

export const fetchRandomQuestion = async (category, difficulty) => {
  let url;
  if(category.length && !difficulty.length){
    url = `https://opentdb.com/api.php?amount=1&category=${categoriesIDs[category]}&type=multiple`
  } else if (!category.length && difficulty.length){
    url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty.toLowerCase()}&type=multiple`
  } else if (category.length && difficulty.length){
    url = `https://opentdb.com/api.php?amount=1&category=${categoriesIDs[category]}&difficulty=${difficulty.toLowerCase()}&type=multiple`
  } else {
    url = 'https://opentdb.com/api.php?amount=1&type=multiple';
  }
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
      question: question.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&mp;/g,"&"),
      isCorrectlyAnswered: false,
      answers: cleanAnswers(question.correct_answer, question.incorrect_answers)
    })
  ) 
}

export const cleanAnswers = (correctAnswer, incorrectAnswers) => {
  const cleanCorrectAnswer = {
    answer: correctAnswer.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&mp;/g,"&"),
    correct: true,
    numVotes: 0
  }
  const cleanIncorrectAnswers = incorrectAnswers.map(answer => ({
    answer: answer.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&mp;/g,"&"),
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