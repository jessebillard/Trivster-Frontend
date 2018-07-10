import React, { Component } from 'react';
import logo from './logo.svg';

import GameContainer from './components/GameContainer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      game: [],

    }
  }

  getGame = () => {
    const url = 'http://localhost:3000/api/v1/games'
    const data = {category: 12, difficulty: 'medium'}
    const options = {
      method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    }
    fetch(url, options)
    .then( (resp) => resp.json())
    .then( (response) => console.log(response))
  }

  componentDidMount() {
    this.getGame()
  }

  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default App;
