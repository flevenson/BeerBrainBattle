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
  })
})