import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();


    this.state = {
      value: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = event => {
    var text = event.target.value
    console.log(text.length);

    this.setState({
      value: text
    });
  }


  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              onChange={this.handleInput}
              value={this.state.value} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
