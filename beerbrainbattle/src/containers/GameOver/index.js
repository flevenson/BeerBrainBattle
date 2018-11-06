import React from 'react';
import './GameOver.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayers, addPrize } from '../../actions';
import { withRouter } from 'react-router';

export const GameOver = (props) => {

  if(!Object.keys(props.question).length){
    props.history.push('/')
  } 

  let correctAnswer

  if(Object.keys(props.question).length){
    correctAnswer = props.question.answers.find(answer => answer.correct === true)
  return(
    <div className='answer-container'>
      <div className='answer'>
        <h1 className='game-over'>GAME OVER</h1>
        <p className='correct-answer-title'>The Correct Answer Was:</p>
        <p className='correct-answer-answer'>{correctAnswer.answer}</p>
        <p className='award'>You Won {props.prize}</p>
      </div>
      <button 
        onClick={() => {
          props.addPlayers(0)
          props.addPrize('')
          props.history.push('/')
        }} 
        className='next-round'>Play Again!</button>
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
  question: state.question,
  prize: state.prize
})

export const mapDispatchToProps = (dispatch) => ({
  addPlayers: (players) => dispatch(addPlayers(players)),
  addPrize: (prize) => dispatch(addPrize(prize))
})

GameOver.propTypes = {
  players: PropTypes.number.isRequired,
  prize: PropTypes.string.isRequired,
  question:PropTypes.object.isRequired,
  addPlayers: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameOver))