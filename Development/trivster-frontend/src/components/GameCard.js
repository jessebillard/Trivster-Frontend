import React from 'react';
import AnswerButton from './answerButton';

class GameCard extends React.Component {
  // console.log(props)
  constructor() {
    super()

    // const { answer, incorrect_answers } = this.props.question
    // const answers = this.randomizeAnswers(incorrect_answers.push(answer))

    this.state = {
      answers: []
    }
  }

  randomizeAnswers = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

  generateAnswerButtons = () => {

  }

  answerClick = (e) => {
    debugger;
  }
  //maybe make this into a class?
  // steps for answers
  // -- assigning the correct answer and incorrect answers attributes to know which one user selects
  // -- adding all possible answers to a single array
  // -- randomizing the order of these answers
  // -- iterate over this new answers array rendering a list item for each one
  render() {
    console.log(this.props.question)
    return(
      <div>
        <h3 dangerouslySetInnerHTML={{__html: this.props.question.question}} />
        <AnswerButton onClick={this.answerClick} answer={this.props.question.answer}/>
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[0]} />
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[1]} />
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[2]} />
        {/* <p dangerouslySetInnerHTML={{__html: this.props.question.answer}} /> */}
      </div>
    )
  }
}

export default GameCard;
