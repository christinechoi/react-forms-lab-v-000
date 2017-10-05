import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }



  handleInput = event => {
    const text = event.target.value

    this.setState({
      value: text
    });
  }



  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.value}
          onChange={this.handleInput}
        />
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;