import { questionReducer } from '../reducers/questionReducer';
import { playersReducer } from '../reducers/playersReducer';
import { prizeReducer } from '../reducers/prizeReducer';
import * as Actions from '../actions';
import { mockQuestion, mockPlayers, mockAnswer, mockPrize, mockVotedQuestion } from './testMocks';


describe('reducers', () =>{
  describe('questionReducer', () => {

    it('should return the default state', () => {
      const expected = {};
      const result = questionReducer(undefined, {})

      expect(result).toEqual(expected);
    })

    it('should return state with a question', () => {
      const initialState = {};
      const expected = mockQuestion[0];

      const result = questionReducer(initialState, Actions.addQuestion(mockQuestion))

      expect(result).toEqual(expected)

  })
    it('should update state when an answer recieves a vote', () => {
      const initialState = mockQuestion[0];
      const expected = mockVotedQuestion[0];

      const result = questionReducer(initialState, Actions.addVote(mockAnswer.answer))

      expect(result).toEqual(expected)

  })

  })

  describe('playersReducer', () => {
  
    it('should return the default state', () => {
      const expected = 0;
      const result = playersReducer(undefined, {})

      expect(result).toEqual(expected);
    })

    it('should return state with users', () => {
      
      const initialState = 0;
      const expected = mockPlayers;
      const result = playersReducer(initialState, Actions.addPlayers(mockPlayers));

      expect(result).toEqual(expected)
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

