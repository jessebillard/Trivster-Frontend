import React, { Component } from 'react';
import GameCard from './GameCard'



class GameContainer extends Component {

  render() {

    return (
      <div>
          {this.props.questions.map( (question) =>
          <GameCard key={question.id} question={question} gameId={this.props.gameId}/>
        )}
    </div>
    );
  }
}

export default GameContainer;
