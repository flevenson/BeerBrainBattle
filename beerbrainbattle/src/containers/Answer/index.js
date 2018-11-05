import React from 'react';
import './Answer.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export const Answer = (props) => {
  if(!Object.keys(props.question).length){
    props.history.push('/')
  } 

  let correctAnswer

  if(Object.keys(props.question).length){
    correctAnswer = props.question.answers.find(answer => answer.correct === true)
  return(
    <div className='answer-container'>
      <div className='answer'>
        <p className='correct-answer-title'>The Correct Answer Is</p>
        <p className='correct-answer-answer'>{correctAnswer.answer}</p>

      </div>
      <button onClick={() => props.history.push('/')} className='next-round'>Next Round</button>
    </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  players: state.players,
  question: state.question
})

export default withRouter(connect(mapStateToProps)(Answer))