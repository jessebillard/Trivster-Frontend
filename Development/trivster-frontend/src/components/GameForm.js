import React from 'react';
// import { Form, TextArea } from 'semantic-ui-react'
import { Select, Segment, Divider, Modal, Transition } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

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
            modalOpen: false,
            modalMessage: ''
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
        if (!this.state.category) {
            // alert('please select a category!')
            this.setState({
                modalOpen: true,
                modalMessage: "Please select a category!"
            })
        } else if (!this.state.difficulty) {
            // alert('please select a difficulty!')
            this.setState({
                modalOpen: true,
                modalMessage: "Please select a difficulty!"
            })
        } else {
            this.props.submit(this.state)
        }
    }

    categoriesArray = () => {
        const newCategories = this.props.categories.map(category => {
            const option =  Object.values(category).join()
            return {'value': option, 'text': option}
        })
        return newCategories
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        const difficulties = [{text: "Easy", value:"Easy"}, {text: "Medium", value:"Medium"}, {text: "Hard", value:"Hard"}]
        // const inlineStyle = {
        //     modal : {
        //       marginBottom: '118px !important',              
        //     }
        //   };
        return(
            <Transition duration={3000} visible={true} transitionOnMount={true} >
                <div style={{margin: '2rem'}}>
                        <h2>Create A Trivia Game!</h2>
                        <Segment>
                            <Select placeholder="Select Category" value={this.state.category} onChange={this.handleCategory} selection options={this.categoriesArray()} />
                            <Divider horizontal>And...</Divider>
                            <Select placeholder="Select Difficulty" value={this.state.difficulty} options={difficulties} selection onChange={this.handleDifficulty} />
                            <Divider horizontal>NOW</Divider>
                            <Button content="Start Game!" onClick={this.onSubmit}/>
                        </Segment>
                        <div className="modal">
                            <Modal dimmer={"inverted"} size="mini" open={this.state.modalOpen}>                                    
                                <Modal.Header>Whoops!</Modal.Header>
                                <Modal.Content>
                                    <p>Please enter a {this.state.modalMessage}</p>
                                </Modal.Content>
                                <Modal.Actions>                                    
                                    <Button positive onClick={this.closeModal} icon='checkmark' labelPosition='right' content='Got it!' />
                                </Modal.Actions>                                    
                            </Modal> 
                        </div>
                </div>
            </Transition>
        )
    }


}

export default GameForm;