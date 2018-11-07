import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion, mockPlayers } from './testMocks.js'
import { Answer, mapStateToProps } from '../containers/Answer';
import * as Actions from '../actions'


describe('Answer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Answer 
        question={mockQuestion[0]} />);
  })

  describe('Answer Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the players from state', () => {
      const mockState = {
        players: mockPlayers,
        question: mockQuestion[0]
      }
      const expected = 4

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.players).toEqual(expected)
    })

    it('should parse the question from state', () => {
      const mockState = {
        players: mockPlayers,
        question: mockQuestion[0]
      }

      const expected = mockQuestion[0]

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.question).toEqual(expected)
    })
  })
})