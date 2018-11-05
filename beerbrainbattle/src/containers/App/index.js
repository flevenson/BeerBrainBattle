import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import QuestionControls from '../QuestionControls';
import Question from '../Question'
import Answer from '../Answer'
import { connect } from 'react-redux';

export const App = (props) => {

    return (
      <div className="App">
        <header>
          <h1 className='app-heading'>
            <span className='heading-beer'>Beer</span>
            <span className='heading-brain'>Brain</span>
            <span className='heading-battle'>Battle</span>
          </h1>
            <span className='player-count-holder'>
                <h1 className='player-count'>{props.players}</h1>
                <h1 className='players'>players</h1>
            </span>
        </header>
        <main className='app-main'>
          <Route 
            exact path='/'
            render={() => <QuestionControls />}
          />
          <Route 
            exact path='/question'
            render={() => <Question />}
          />
          <Route 
            exact path='/answer'
            render={() => <Answer />}
          />
        </main>
      </div>
    )

}

export const mapStateToProps = (state) => ({
  players: state.players
})

// export const mapDispatchToProps = (dispatch) => ({

// })

export default withRouter(connect(mapStateToProps)(App));
