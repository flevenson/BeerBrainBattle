import React from 'react';
import { shallow } from 'enzyme';
import { mockPlayers } from './testMocks.js';
import { QuestionControls, mapStateToProps, mapDispatchToProps } from '../containers/QuestionControls';
import * as Actions from '../actions';
import * as BeerData from '../assets/BeerData.js';

describe('QuestionControls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuestionControls 
        />);
      
  })

  describe('QuestionControls Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})