import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addVote } from '../../actions'

export const Question = (props) => {

  if(!Object.keys(props.question).length && !props.players){
    props.history.push('/')
  } 
  
  if(Object.keys(props.question).length){

  const answers = props.question.answers.map(answer => 
    <button 
      className='answer-button'
      onClick={() => props.addVote(answer.answer)}
      >{answer.answer}   {answer.numVotes}
    </button>
)

  const totalVotes = props.question.answers.reduce((allVotes, answer) => {
    allVotes += answer.numVotes
    return allVotes
  }, 0)

  console.log(totalVotes)

  if(totalVotes === parseInt(props.players) && Object.keys(props.question).length) {
    props.history.push('/answer')
  }


    return (
      <div className='question-holder'>
        <div className='question'>
          <h1>{props.question.question}</h1>
        </div>
        <div className='answers'>
          { answers }
        </div>
      </div>
      )
  }
  else {
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

export const mapDispatchToProps = (dispatch) => ({
  addVote: (answer) => dispatch(addVote(answer)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))