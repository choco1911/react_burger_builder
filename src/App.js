import React, { Component } from 'react';

class App extends Component {
    constructor (props) {
        super(props)
        this.style = {
                      width: '300px',
                      margin: 'auto',
                      backgroundColor: 'Peru',
                      textAlign: 'center'}
    }

    render() {
        return (
              <div style={this.style}>
                <h1>IT WORKS!!!</h1>
              </div>
        );
    }
}

export default App;
