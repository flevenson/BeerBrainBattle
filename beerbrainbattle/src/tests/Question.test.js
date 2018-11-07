import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion, mockPlayers, mockPrize } from './testMocks.js'
import { Question, mapStateToProps, mapDispatchToProps } from '../containers/Question';
import * as Actions from '../actions'


describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Question 
      question={mockQuestion[0]} 
      addVote={jest.fn()}
      filterPlayers={jest.fn()}
    />);
  })

  describe('Question Component', () => {
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addVote action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.addVote()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addVote()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the filterPlayers action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.filterPlayers()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.filterPlayers()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })

})