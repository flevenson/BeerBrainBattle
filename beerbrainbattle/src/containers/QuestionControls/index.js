import React, { Component } from 'react';
import './QuestionControls.css';
import PropTypes from 'prop-types';
import * as BeerData from '../../assets/BeerData.js';
import * as API from '../../utils'

export class QuestionControls extends Component {
  constructor() {
    super()
    this.state = {
      category: '',
      difficulty: '',
      numPlayers: '',
      showCategories: false,
      showDifficulty: false,
    }
  }


  toggleShowCategories = () => {
    this.setState({
      showCategories: !this.state.showCategories
    })
  }

  setCategory = (event) => {
    const category = event.target.innerText

    this.setState({
      category,
      showCategories: !this.state.showCategories
    })
  }

  toggleShowDifficulty = () => {
    this.setState({
      showDifficulty: !this.state.showDifficulty
    })
  }

  setDifficulty = (event) => {
    const difficulty = event.target.innerText

    this.setState({
      difficulty,
      showDifficulty: !this.state.showDifficulty
    })
  }  

  handlePlayersChange = (event) => {
    this.setState({
      numPlayers: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    return await API.fetchRandomQuestion()

  }

  render() {

  const { showDifficulty, showCategories, category, difficulty, numPlayers } = this.state;


  const categoryOptions = BeerData.categories.map(categoryData => 
    <li 
      className={ 
        showCategories 
        ? 'dropdown-option' 
        : 'hidden' } 
      onClick={ this.setCategory }>{ categoryData } 
    </li>
  )

    return(
      <form className='question-controls'>
        <div>
          <div className='dropdown-title' onClick={ this.toggleShowCategories}>{ category.length ? category : 'Category' }</div>
          <ul className='category-holder'>
            { categoryOptions }
          </ul>
        </div>
        <div>
          <div className='dropdown-title' onClick={ this.toggleShowDifficulty}>{ difficulty.length ? difficulty : 'Difficulty'}</div>
          <ul>
            <li 
              className={ 
                showDifficulty 
                ? 'dropdown-option' 
                : 'hidden'} 
              onClick={this.setDifficulty}>Easy
            </li>
            <li 
              className={ 
                showDifficulty 
                ? 'dropdown-option' 
                : 'hidden'} 
              onClick={this.setDifficulty}>Medium
            </li>
            <li 
              className={ 
                showDifficulty 
                ? 'dropdown-option' 
                : 'hidden'} 
              onClick={this.setDifficulty}>Hard
            </li>
          </ul>
        </div>
        <input className='dropdown-title' placeholder='Number Of Players' value={ numPlayers } onChange={this.handlePlayersChange} ></input>
        <button className='dropdown-title' onClick={this.handleSubmit}> Battle </button>
      </form>
    )
  }
}

export default QuestionControls