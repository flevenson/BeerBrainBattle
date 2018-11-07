import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../containers/App';
import { mockPrize, mockPlayers } from './testMocks.js'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App 
      prize={ mockPrize }/>);
  })

  describe('App Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the players from state', () => {
      const mockState = {
        players: mockPlayers,
        prize: mockPrize
      }
      const expected = 4

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.players).toEqual(expected)
    })

    it('should parse the prize from state', () => {
      const mockState = {
        players: mockPlayers,
        prize: mockPrize
      }

      const expected = mockPrize

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.prize).toEqual(expected)
    })
  })
})