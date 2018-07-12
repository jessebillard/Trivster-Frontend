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

  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  generateAnswerButtons = () => {
        return this.shuffle([<AnswerButton onClick={this.answerClick} answer={this.props.question.answer}/>,
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[0]} />,
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[1]} />,
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[2]} />])
  }

  answerClick = (e) => {
    // debugger;
    if (e.currentTarget.classList.value.split(" ").indexOf("correct") > 0) {
      // e.currentTarget.style.color = "green"
      this.props.incrementScore()
    } else {
      // e.currentTarget.style.color = "red"
    }
  }
  //maybe make this into a class?
  // steps for answers
  // -- assigning the correct answer and incorrect answers attributes to know which one user selects
  // -- adding all possible answers to a single array
  // -- randomizing the order of these answers
  // -- iterate over this new answers array rendering a list item for each one
  render() {
    console.log(this.props.question)
    const answerArray = this.generateAnswerButtons()
    return(
      <div>
        <h3 dangerouslySetInnerHTML={{__html: this.props.question.question}} />
        {/* somehow shuffle these answer buttons! */}
        {/* get them to use dangerouslySetInnerHTML to format answers correctly */}
        {answerArray[0]}
        {answerArray[1]}
        {answerArray[2]}
        {answerArray[3]}
        {/* <AnswerButton onClick={this.answerClick} answer={this.props.question.answer}/>
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[0]} />
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[1]} />
        <AnswerButton onClick={this.answerClick} incorrectAnswer={this.props.question.incorrect_answers[2]} /> */}
        {/* <p dangerouslySetInnerHTML={{__html: this.props.question.answer}} /> */}
      </div>
    )
  }
}

export default GameCard;
