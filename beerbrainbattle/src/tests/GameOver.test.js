import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion } from './testMocks.js';
import { GameOver, mapStateToProps, mapDispatchToProps } from '../containers/GameOver';
import * as Actions from '../actions';

describe('GameOver', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameOver
      question={ mockQuestion[0] } 
        />);
      
  })

  describe('GameOver Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})