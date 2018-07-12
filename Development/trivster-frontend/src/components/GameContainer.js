import React, { Component } from 'react';
import GameCard from './GameCard'



class GameContainer extends Component {

  constructor() {
    super() 
    this.state = {
      score: 0
    }
  }

  incrementScore = () => {
    // debugger;
    const newScore = this.state.score
    this.setState({
      score: newScore + 1
    }, () => console.log(this.state))
  }

  render() {

    return (
      <div>
          {this.props.questions.map( (question) =>
          <GameCard key={question.id} 
            incrementScore={this.incrementScore} 
            question={question} 
            gameId={this.props.gameId}
          />
        )}
    </div>
    );
  }
}

export default GameContainer;
