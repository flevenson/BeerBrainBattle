import React from 'react';
import { shallow } from 'enzyme';
import { mockQuestion } from './testMocks.js'
import { Question, mapStateToProps } from '../containers/Question';
import * as Actions from '../actions'


describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Question 
        question={mockQuestion[0]} />);
  })

  describe('Question Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})