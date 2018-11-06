import * as Actions from '../actions';
import { mockQuestion, mockPlayers, mockAnswer, mockPrize } from './testMocks';

describe('actions', () => {
  it('should have a type of ADD_QUESTION', () => {
    const question = mockQuestion;
    const expectedAction = {
      type: 'ADD_QUESTION',
      question: question,
    }

    const result = Actions.addQuestion(mockQuestion)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_PLAYERS', () => {
    const players = mockPlayers;

    const expectedAction = {
      type: 'ADD_PLAYERS',
      players: players,
    }

    const result = Actions.addPlayers(players)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_VOTE', () => {
    const answer = mockAnswer
    const expectedAction = {
      type: 'ADD_VOTE',
      answer: answer
    }

    const result = Actions.addVote(answer)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of FILTER_PLAYERS', () => {
    const players = mockPlayers;
    const expectedAction = {
      type: 'FILTER_PLAYERS',
      players: players
    }

    const result = Actions.filterPlayers(players)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_PRIZE', () => {
    const prize = mockPrize;
    const expectedAction = {
      type: 'ADD_PRIZE',
      prize: prize
    }

    const result = Actions.addPrize(prize)

    expect(result).toEqual(expectedAction)
  })
})