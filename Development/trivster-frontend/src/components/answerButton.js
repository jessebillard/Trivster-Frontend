import React from 'react'
import { Button } from 'semantic-ui-react'

const AnswerButton = (props) => {
    // debugger;
    if (props.answer) {
        return <Button onClick={props.onClick} >Correct Answer</Button>
    } else if (props.incorrectAnswer) {
        return <Button onClick={props.onClick} >Incorrect Answer</Button> 
    }
}

export default AnswerButton;