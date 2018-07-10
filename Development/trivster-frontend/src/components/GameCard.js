import React from 'react';

const GameCard = (props) => {
  console.log(props)

  return(
    <div>
      <h3 dangerouslySetInnerHTML={{__html: props.question.question}} />
      <p dangerouslySetInnerHTML={{__html: props.question.answer}} />
    </div>
  )
}

export default GameCard;
