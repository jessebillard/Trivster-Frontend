import React from 'react';
import { Segment } from 'semantic-ui-react'

const ScoreCard = (props) => {
    return (
        <Segment raised>
            <h1>SCORE: {props.score} / 10</h1>
        </Segment>
    )
}

export default ScoreCard;