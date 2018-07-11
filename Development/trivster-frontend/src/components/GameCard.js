import React from 'react';

const GameCard = (props) => {
  // console.log(props)

  //maybe make this into a class?
  // steps for answers
  // -- assigning the correct answer and incorrect answers attributes to know which one user selects
  // -- adding all possible answers to a single array
  // -- randomizing the order of these answers
  // -- iterate over this new answers array rendering a list item for each one

  return(
    <div>
      <h3 dangerouslySetInnerHTML={{__html: props.question.question}} />
      <p dangerouslySetInnerHTML={{__html: props.question.answer}} />
    </div>
  )
}

export default GameCard;
