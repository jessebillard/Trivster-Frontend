import React from 'react'
import { Button } from 'semantic-ui-react'

const AnswerButton = (props) => {
    // debugger;
    if (props.answer) {
        return <Button className="correct" onClick={props.onClick}><h3 dangerouslySetInnerHTML={{__html: props.answer}} /></Button>
    } else if (props.incorrectAnswer) {
        return <Button className="incorrect" onClick={props.onClick}><h3 dangerouslySetInnerHTML={{__html: props.incorrectAnswer}} /></Button>
    }
}

export default AnswerButton;