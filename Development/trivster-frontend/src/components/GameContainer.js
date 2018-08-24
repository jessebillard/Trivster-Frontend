import React, { Component } from 'react';
import GameCard from './GameCard'
import ScoreCard from './ScoreCard';
import { Modal, Button } from 'semantic-ui-react'


class GameContainer extends Component {

  constructor() {
    super() 
    this.state = {
      score: 0,
      currentQuestion: '',
      modalOpen: false
    }
  }

  incrementScore = () => {
    // debugger;
    // update currentQuestion to the next question in props.questions array
    const newScore = this.state.score
    this.setState({
      score: newScore + 1
    }, () => this.incrementCurrentQuestion())
    // this.incrementCurrentQuestion()
  }

  nextQuestionWhenWrong = () => {
    this.incrementCurrentQuestion()
  }

  incrementCurrentQuestion = () => {
    // find the this.state.currentQuestion's index from this.props.questions, then increment that number and set state again.
    const index = this.props.questions.indexOf(this.state.currentQuestion)
    console.log(index)
    if (index === 9) {
      this.playAgain()
    } else {
      this.setState({
        currentQuestion: this.props.questions[index + 1]
      })
    }
  }

  playAgain = () => {
    // alert(`Your Final Score Is: ${this.state.score} / 10`)
    this.setState({
      modalOpen: true
    })
    // this.props.resetGame()
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

  closeModal = () => {
    this.setState({
      modalOpen: false
    }, () => this.props.resetGame())
  }

  render() {
    return (
      <div>
       
          <Modal dimmer={"inverted"} className="modal" size="mini" open={this.state.modalOpen}>                                    
              <Modal.Header>Way 2 Go Trivster!</Modal.Header>
              <Modal.Content>
                  <p>Your Score is: {this.state.score}/10</p>
              </Modal.Content>
              <Modal.Actions>                                    
                  <Button positive onClick={this.closeModal} icon='checkmark' labelPosition='right' content='Got it!' />
              </Modal.Actions>                                    
          </Modal>
        
        {this.state.currentQuestion ? this.questionRender(this.state.currentQuestion) : ''}
        <ScoreCard score={this.state.score} />
    </div>
    );
  }
}

export default GameContainer;
