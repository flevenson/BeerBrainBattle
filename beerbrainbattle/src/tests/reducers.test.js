import { questionReducer } from '../reducers/questionReducer';
import { playersReducer } from '../reducers/playersReducer';
import { prizeReducer } from '../reducers/prizeReducer';
import * as Actions from '../actions';
import { mockQuestion, mockPlayers, mockAnswer, mockPrize } from './testMocks';


describe('reducers', () =>{
  describe('questionReducer', () => {

    it('should return the default state', () => {
      const expected = {};
      const result = questionReducer(undefined, {})

      expect(result).toEqual(expected);
    })

  })

  describe('playersReducer', () => {
  
    it('should return the default state', () => {
      const expected = 0;
      const result = playersReducer(undefined, {})

      expect(result).toEqual(expected);
    })

  })

  describe('prizeReducer', () => {

    it('should return the default state', () => {
      const expected = '';
      const result = prizeReducer(undefined, {})

      expect(result).toEqual(expected);
    })


  })
})

