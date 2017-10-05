import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      password: ""
    };

    // this.handleInput = this.handleInput.bind(this);
    // this.handleInputUsername = this.handleInputUsername.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = event => {
    var text = event.target.value
    console.log(text.length);

    this.setState({
      password: text
    });
  }

  handleInputUsername = event => {
    var username = event.target.value
    console.log(username.length);

    this.setState({
      value: username
    });
  }

  handleSubmit = event => {
    event.preventDefault();

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              onChange={this.handleInputUsername}
              value={this.state.value} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="test-password" 
            type="password"
            onChange={this.handleInput}
            value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit"> Log in </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
