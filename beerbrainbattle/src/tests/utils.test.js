import * as API from '../utils';
import { categoriesIDs } from '../assets/BeerData.js';
import { mockCategory, mockDifficulty, mockQuestion, mockAPIQuestion } from './testMocks'

describe('API', () => {
  describe('fetchRandomQuestion', () => {

    beforeEach(() => {

      window.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAPIQuestion)
      }))
    })

    it('should call fetch with the correct url when empty strings are passed', async () => {
      const expected = 'https://opentdb.com/api.php?amount=1&type=multiple';

      await API.fetchRandomQuestion('', '')

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should call fetch with the correct url when a category is passed', async () => {
      const expected = `https://opentdb.com/api.php?amount=1&category=19&type=multiple`

      await API.fetchRandomQuestion(mockCategory, '')

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should call fetch with the correct url when a difficulty is passed', async () => {
      const expected = `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`

      await API.fetchRandomQuestion('', mockDifficulty)

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })


    it('should call fetch with the correct url when a category and difficulty are passed', async () => {
      const expected = `https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=multiple`

      await API.fetchRandomQuestion(mockCategory, mockDifficulty)

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should return a clean question if status is ok', async () => {
      const result = await API.fetchRandomQuestion(mockCategory, mockDifficulty)
      const expected = mockQuestion

      expect(result.length).toEqual(expected.length)
    })

    it('should return a clean set of answers when given one correct and 3 incorrect answers', () => {
      const result = API.cleanAnswers(mockAPIQuestion.results[0].correct_answer, mockAPIQuestion.results[0].incorrect_answers)

      expect(result.length).toEqual(4)
    })

    // it('should throw an error if the status is not ok', () => {
    //   const expected = Error('fetch failed.')

    //   window.fetch = jest.fn(() => Promise.resolve({ ok: false, statusText: 'fetch failed.'}))

    //   expect(API.fetchRandomQuestion()).rejects.toEqual(expected)
    // })
  })
})