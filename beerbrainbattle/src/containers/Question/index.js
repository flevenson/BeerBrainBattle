import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addVote, filterPlayers } from '../../actions'

export const Question = (props) => {

  if(!Object.keys(props.question).length && !props.players) {
    props.history.push('/')
  } 
  
  if(Object.keys(props.question).length) {

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

  if(totalVotes === parseInt(props.players) && Object.keys(props.question).length) {
    const correctAnswer = props.question.answers.find(answer => answer.correct === true)
    if(correctAnswer.numVotes !== 0) {
      props.filterPlayers(correctAnswer.numVotes)
    }
    if(correctAnswer.numVotes === 1) {
      props.history.push('/gameOver')
    } else {
      props.history.push('/answer')
    }
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
  filterPlayers: (players) => dispatch(filterPlayers(players))
})

Question.propTypes = {
  players: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  addVote: PropTypes.func.isRequired,
  filterPlayers: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))