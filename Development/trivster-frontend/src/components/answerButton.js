import React from 'react'
import { Button } from 'semantic-ui-react'

const AnswerButton = (props) => {
    // debugger;
    if (props.answer) {
        return <Button className="correct" onClick={props.onClick}>{props.answer}</Button>
    } else if (props.incorrectAnswer) {
        return <Button className="incorrect" onClick={props.onClick}>{props.incorrectAnswer}</Button>
    }
}

export default AnswerButton;