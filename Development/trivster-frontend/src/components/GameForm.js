import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import { Select, Dropdown } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

//Form should have a Create New Game Welcome
// -- Select Category label and dropdown button displaying categories
// -- Select Difficulty label and dropdown with easy/medium/hard
// -- Start (submit) button

class GameForm extends React.Component {
    constructor() {
        super()
        this.state = {
            category: '',
            difficulty: '',
            
        }
    }

    handleCategory = (e) => {
        // console.log(e.target.tagName)
        // console.log(e.target.innerText)
        if (e.target.tagName === 'SPAN') {
            this.setState({
                category: e.target.innerText
            })
        } else if (e.target.tagName === 'DIV') {
            this.setState({
                category: e.target.firstElementChild.innerText
            })
        }
    }

    handleDifficulty = (e) => {
        
        if (e.target.tagName === 'SPAN') {
            this.setState({
                difficulty: e.target.innerText
            })
        } else if (e.target.tagName === 'DIV') {
            this.setState({
                difficulty: e.target.firstElementChild.innerText
            })
        }
    }

    onSubmit = () => {
        this.props.submit(this.state)
    }

    categoriesArray = () => {
        const newCategories = this.props.categories.map(category => {
            return {'text': Object.values(category).join()}
        })
        return newCategories
    }


    render() {
        const difficulties = [{text: "Easy"}, {text: "Medium"}, {text: "Hard"}]
        console.log(this.state)
        return(
            <div style={{margin: '2rem'}}>
                <Select placeholder="Select Category" onChange={this.handleCategory} selection options={this.categoriesArray()} />
                {/* <Select placeholder='Select your country' options={difficulties} /> */}
                <Select placeholder="Select Difficulty" options={difficulties} selection onChange={this.handleDifficulty} />
                <Button content="Start Game!" onClick={this.onSubmit}/>
            </div>
        )
    }


}

export default GameForm;