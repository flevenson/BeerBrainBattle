import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion } from './testMocks.js'
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
})