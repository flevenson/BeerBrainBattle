import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import QuestionControls from '../QuestionControls';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-heading'>
            <span className='heading-beer'>Beer</span>
            <span className='heading-brain'>Brain</span>
            <span className='heading-battle'>Battle</span>
          </h1>
        </header>
        <main className='app-main'>
          <QuestionControls />
        </main>
      </div>
    );
  }
}

export default App;
