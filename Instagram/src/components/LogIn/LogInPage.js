import React from "react";

class LogInPage extends React.Component {
  state= {
      username: ""
  }

  handleChanges = e => {this.setState({username: e.target.value})}

  logIn = e => {
      e.preventDefault();
      localStorage.setItem("user", this.state.username);
      window.location.reload();
  }

  render() {
      return (
        <div className="log-in">
          <input 
          type="text"
          value={this.state.username}
          onChange={this.handleChanges}
          />
          <button onClick={this.logIn}>Log In</button>
        </div>
      )
  }

}




export default LogInPage;