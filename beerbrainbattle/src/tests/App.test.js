import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../containers/App';
import { mockPrize } from './testMocks.js'

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
})