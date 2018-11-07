import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import QuestionControls from '../QuestionControls';
import Question from '../Question';
import Answer from '../Answer';
import GameOver from '../GameOver';
import { connect } from 'react-redux';

export const App = (props) => {
  const noMatch = ({ location }) => (
    <div>
      <p> boo hoo </p>
      <p> 404 ERROR </p>
      <p> does not compute</p>
    </div>
  )

    return (
      <div className="App">
        <header>
          <h1 className='app-heading'>
            <span className='heading-beer'>Beer</span>
            <span className='heading-brain'>Brain</span>
            <span className='heading-battle'>Battle</span>
          </h1>
            <span className={props.players ?  'player-count-holder' : 'hidden'}>
                <h1 className='player-count'>{props.players}</h1>
                <h1 className='players'>players</h1>
            </span>
        </header>
        <main className='app-main'>
        <Switch>
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
          <Route
            exact path='/gameOver'
            render={() => <GameOver />}
          />
          <Route 
            component={noMatch}
          />
        </Switch>
        </main>
        <footer>
          <h1 className={props.prize.length ? 'prize-text' : 'hidden'}>Current Prize: {props.prize}</h1>
        </footer>
      </div>
    )

}

export const mapStateToProps = (state) => ({
  players: state.players,
  prize: state.prize
})

App.propTypes = {
  players: PropTypes.number,
  prize: PropTypes.string.isRequired
}

export default withRouter(connect(mapStateToProps)(App));
