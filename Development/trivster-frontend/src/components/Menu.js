import React from 'react'
import ReactRevealText from 'react-reveal-text'
import { Transition } from 'semantic-ui-react'

class Menu extends React.Component {

    constructor() {
      super();
      this.state = { show: false };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ show: true });
      }, 1);
    }
  
    render() {
      const bgStyles = {
        background: 'linear-gradient(135deg, #1f304c, #dd7777)',
        padding: '10px',
        marginBottom: '24px'
      };
      const textStyles = {
        color: 'white',
        fontSize: '24px',
        lineHeight: '36px',
        fontFamily: 'verdana',
        textAlign: 'center',
        letterSpacing: '1.5em',
        paddingLeft: '1em', // to compensate for letter spacing
      };
      return (
      <Transition duration={3000} visible={true} transitionOnMount={true} >
          <div style={bgStyles}>
            <div style={textStyles}>
                <ReactRevealText show={this.state.show} text="Trivster" />
            </div>
          </div>
      </Transition>
      );
    }
  }

  export default Menu