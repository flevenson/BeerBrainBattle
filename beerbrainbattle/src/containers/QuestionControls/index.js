import React, { Component } from 'react';
import './QuestionControls.css';
import PropTypes from 'prop-types';
import * as BeerData from '../../assets/BeerData.js'

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


  showCategories = () => {
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

  showDifficulty = () => {
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

  render() {

  const categoryOptions = BeerData.categories.map(category => 
    <li className={this.state.showCategories ? 'dropdown-option' : 'hidden' } onClick={this.setCategory}>{category}</li>
  )

    return(
      <form className='question-controls'>
        <div>
          <div className='dropdown-title' onClick={this.showCategories}>{this.state.category.length ? this.state.category : 'Category' }</div>
          <ul className='category-holder'>
            { categoryOptions }
          </ul>
        </div>
        <div>
          <div className='dropdown-title' onClick={this.showDifficulty}>{this.state.difficulty.length ? this.state.difficulty : 'Difficulty'}</div>
          <ul>
            <li className={this.state.showDifficulty ? 'dropdown-option' : 'hidden'} onClick={this.setDifficulty}>Easy</li>
            <li className={this.state.showDifficulty ? 'dropdown-option' : 'hidden'} onClick={this.setDifficulty}>Medium</li>
            <li className={this.state.showDifficulty ? 'dropdown-option' : 'hidden'} onClick={this.setDifficulty}>Hard</li>
          </ul>
        </div>
        <input className='dropdown-title' placeholder='Number Of Players'></input>
        <button className='dropdown-title'> Battle </button>
      </form>
    )
  }
}

export default QuestionControls