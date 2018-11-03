import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

export const Question = (props) => {
  if(!Object.keys(props.question).length && !props.players){
    props.history.push('/')
  }


    
  
  if(Object.keys(props.question).length){

  const answers = props.question.answers.map(answer => 
    <button>{answer.answer}   {answer.numVotes}</button>
)
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

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))