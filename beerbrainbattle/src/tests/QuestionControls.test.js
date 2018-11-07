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
      prize={ '' }
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

    it('should call handleInputChange when numPlayers is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleInputChange')
      wrapper.instance().forceUpdate()
      const mockEvent = { 
        target: { value: 'something'},
        name: 'numPlayers' }

      wrapper.find('.num-players').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalled()
    })

    it('should call handleInputChange when numPlayers is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleInputChange')
      wrapper.instance().forceUpdate()
      const mockEvent = { 
        target: { value: 'something else'},
        name: 'prize' }

      wrapper.find('.prize').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addPlayers action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.addPlayers()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addPlayers()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the addQuestion action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.addQuestion()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addQuestion()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the addPrize action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.addPrize()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addPrize()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })

})