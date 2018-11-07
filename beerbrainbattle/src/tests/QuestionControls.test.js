import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion, mockPlayers, mockPrize } from './testMocks.js';
import { QuestionControls, mapStateToProps, mapDispatchToProps } from '../containers/QuestionControls';
import * as Actions from '../actions';
import * as BeerData from '../assets/BeerData.js';

describe('QuestionControls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuestionControls 
      prize={ mockPrize }
      addPlayers={jest.fn()}
      addPrize={jest.fn()}
      addQuestion={jest.fn()}
        />);
      })

  describe('QuestionControls Component', () => {
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
  })

})