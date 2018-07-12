import React, { Component } from 'react';
import GameCard from './GameCard'
import ScoreCard from './ScoreCard';



class GameContainer extends Component {

  constructor() {
    super() 
    this.state = {
      score: 0,
      currentQuestion: ''
    }
  }

  incrementScore = () => {
    // debugger;
    // update currentQuestion to the next question in props.questions array
    const newScore = this.state.score
    this.setState({
      score: newScore + 1
    }, () => console.log(this.state))
    this.incrementCurrentQuestion()
  }

  nextQuestionWhenWrong = () => {
    this.incrementCurrentQuestion()
  }

  incrementCurrentQuestion = () => {
    // find the this.state.currentQuestion's index from this.props.questions, then increment that number and set state again.
    const index = this.props.questions.indexOf(this.state.currentQuestion)
    console.log(index)
    if (index > 8) {
      this.playAgain()
    } else {
      this.setState({
        currentQuestion: this.props.questions[index + 1]
      })
    }
  }

  playAgain = () => {
    this.props.resetGame()
  }

  questionRender = (question) => {
    return <GameCard key={question.id} 
    incrementScore={this.incrementScore} 
    question={question} 
    gameId={this.props.gameId}
    nextQuestionWhenWrong={this.nextQuestionWhenWrong}
  />
  }

  componentDidMount() {
    this.setCurrentQuestion(this.props.questions)
  }

  setCurrentQuestion = (questions) => {
    this.setState({
      currentQuestion: questions[0]
    })
  }

  questionDelayRender = (questions) => {
    // for (let i = 0; i < questions.length; i++) {
    //   let promise = new Promise()
    //   setTimeout(this.questionRender(questions[i]), 5000)
    // }
  }

//set a timeout method to increment release of gameCards
// show correct or incorrect answers
// show total score
// play again?

// function x() {
//   var promise = new Promise(function(resolve, reject) {
//     window.setTimeout(function() {
//       resolve('done!');
//     });
//   });
//   return promise;
// }

// x().then(function(done) {
//  console.log(done); // --> 'done!'
// });



  render() {
    
    return (
      <div>
        {/* {this.questionDelayRender(this.props.questions)} */}
       
          {this.state.currentQuestion ? this.questionRender(this.state.currentQuestion) : ''}
          {/* {this.props.questions.map( (question) =>
           <GameCard key={question.id} 
              incrementScore={this.incrementScore} 
              question={question} 
              gameId={this.props.gameId}
            />
        )} */}
        <ScoreCard score={this.state.score} />
    </div>
    );
  }
}

export default GameContainer;
