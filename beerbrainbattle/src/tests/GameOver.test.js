import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion, mockPlayers, mockPrize } from './testMocks.js';
import { GameOver, mapStateToProps, mapDispatchToProps } from '../containers/GameOver';
import * as Actions from '../actions';

describe('GameOver', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameOver
      question={ mockQuestion[0] } 
      players={ mockPlayers }
      prize={ mockPrize }
      addPlayers={jest.fn()}
        />);
      })

  describe('GameOver Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

    describe('mapStateToProps', () => {
    it('should parse the players from state', () => {
      const mockState = {
        players: mockPlayers,
        prize: mockPrize,
        question: mockQuestion
      }
      const expected = 4

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.players).toEqual(expected)
    })

    it('should parse the prize from state', () => {
      const mockState = {
        players: mockPlayers,
        prize: mockPrize,
        question: mockQuestion
      }

      const expected = mockPrize

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.prize).toEqual(expected)
    })

    it('should parse the question from state', () => {
      const mockState = {
        players: mockPlayers,
        prize: mockPrize,
        question: mockQuestion
      }

      const expected = mockQuestion

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.question).toEqual(expected)
    })
  })
})