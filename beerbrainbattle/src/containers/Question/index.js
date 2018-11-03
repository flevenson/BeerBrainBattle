import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

export const Question = (props) => {
  if(!Object.keys(props.question).length && !props.players){
    props.history.push('/')
  }


  return (
    <div>
      <p>HIIIII</p>
    </div>
    )


}

export const mapStateToProps = (state) => ({
  players: state.players,
  question: state.question
})

export const mapDispatchToProps = (dispatch) => ({

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))