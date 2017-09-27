import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      maxChars: 140,
    };

    this.handleInput = this.handleInput.bind(this);

  }

  handleInput = event => {
    var text = event.target.value
    console.log(text.length);

    this.setState({
      value: text,
      maxChars: this.state.maxChars - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          onChange={this.handleInput}
          value={this.state.value}
        />
        <button>{this.state.maxChars}</button>
      </div>
    );
  }
}

export default TwitterMessage;