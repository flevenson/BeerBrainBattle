import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayers, addQuestion, addPrize } from '../../actions'
import './QuestionControls.css';
import PropTypes from 'prop-types';
import * as BeerData from '../../assets/BeerData.js';
import * as API from '../../utils'
import { withRouter } from 'react-router';

export class QuestionControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      difficulty: '',
      numPlayers: '',
      prize: '',
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

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { players, category, difficulty, numPlayers, prize } = this.state
    if(this.props.players !== 0){
      this.setState({
        numPlayers: this.props.players
      })
    }
    const question = await API.fetchRandomQuestion(category, difficulty);
    this.props.addQuestion(question);
    this.props.addPlayers(numPlayers);
    this.makePrize();
    await this.props.history.push('/question')  
}

  makePrize = () => {
    if(!this.state.prize.length) {
      const randomBeer = BeerData.beerData[Math.floor(Math.random() * 100)]
      const randomPrize = `${randomBeer.year} ${randomBeer.beerName} from  ${randomBeer.brewery} worth $${randomBeer.value}`
      this.props.addPrize(randomPrize)
    } else {
      this.props.addPrize(this.state.prize)
    }
  }

  render() {

  const { showDifficulty, showCategories, category, difficulty, numPlayers, prize } = this.state;


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
        <input 
          className={this.props.players ? 'hidden' : 'dropdown-title'} 
          placeholder='Number Of Players' 
          value={ numPlayers } 
          onChange={this.handleInputChange} 
          name='numPlayers'>
        </input>
        <input 
          className={this.props.prize ? 'hidden' : 'dropdown-title'} 
          placeholder='What will you Wager?' 
          value={ prize } 
          onChange={this.handleInputChange}
          name='prize'>
        </input>
        <button className='dropdown-title' onClick={this.handleSubmit}> Battle </button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  players: state.players
})

export const mapDispatchToProps = (dispatch) => ({
  addPlayers: (players) => dispatch(addPlayers(players)),
  addQuestion: (question) => dispatch(addQuestion(question)),
  addPrize: (prize) => dispatch(addPrize(prize))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionControls))