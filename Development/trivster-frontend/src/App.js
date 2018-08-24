import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import GameContainer from './components/GameContainer';
import GameForm from './components/GameForm';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      gameId: '',
      questions: []

    }

    this.categories = [
      {1: "Any Category"},
      {9: "General Knowledge"},
      {10: "Books"},
      {11: "Film"},
      {12: "Music"},
      {13: "Musicals & Theatres"},
      {14: "Television"},
      {15: "Video Games"},
      {16: "Board Games"},
      {17: "Science & Nature"},
      {18: "Computers"},
      {19: "Mathematics"},
      {20: "Mythology"},
      {21: "Sports"},
      {22: "Geography"},
      {23: "History"},
      {24: "Politics"},
      {25: "Art"},
      {26: "Celebrities"},
      {27: "Animals"},
      {28: "Vehicles"},
      // {29: "Comics"},
      {30: "Gadgets"},
      {31: "Japanese Anime & Manga"},
      {32: "Cartoon & Animations"}
    ]

  }

  getGame = (categoryNumber, difficultySelection) => {
    const url = 'http://localhost:3000/api/v1/games'
    const data = {category: categoryNumber, difficulty: difficultySelection.toLowerCase()}
    // debugger;
    const options = {
      method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    }
    fetch(url, options)
    .then( (resp) => resp.json())    
    .then( (response) => {
      if (!response[10]) {
        alert("There are not enough questions to this category and difficulty, please select differently.")
      } else {
          this.setState({
          gameId: response[10].game_id,
          questions: response.slice(0, 10)
        })
      }
    })
  }

  gameFormSubmit = (data) => {
    const category = this.findGameNumber(data)
    const categoryNumber = parseInt(Object.keys(category).join())
    const difficultySelection = data.difficulty
    this.getGame(categoryNumber, difficultySelection)
  }

  findGameNumber = (data) => {
    const categoryObj = this.categories.find(category => {
      return data.category === Object.values(category).join()
    })
    return categoryObj
  }

  resetGame = () => {
    this.setState({
      gameId: ''
    })
  }

  render() {    
    return (
      <div className="App">
        <Menu inverted size="large">
          <Menu.Item name="Trivster!"/>
        </Menu>
        {!this.state.gameId ? <GameForm submit={this.gameFormSubmit} categories={this.categories}/> : '' }
        {/* Render game container if questions or gameId exist */}
        {this.state.gameId ? <GameContainer questions={this.state.questions} resetGame={this.resetGame} gameId={this.state.gameId}/> : '' }
      </div>
    );
  }
}

export default App;
