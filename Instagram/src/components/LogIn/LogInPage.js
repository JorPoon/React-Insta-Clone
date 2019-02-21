import React from "react";
import styled from "styled-components"


const logger = styled.button`
padding: 6px 10px;
margin: 5px;
border: none;
border-radius: 3px;
color: white;
`;

class LogInPage extends React.Component {
  state= {
      username: "",
      password: "",
     
  }

  handleChanges = e => {this.setState({[e.target.name]: e.target.value})}

  logIn = e => {
      e.preventDefault();
      localStorage.setItem("user", this.state.username);
      localStorage.setItem("password", this.state.password);
      window.location.reload();
  }

  render() {
      return (
        <div className="log-in">
        <p>UserName
          <input 
          type="text"
          value={this.state.username}
          onChange={this.handleChanges}
          name="username"
          />
          </p>
          <p>
            Password 
            <input 
            type="text"
            value={this.state.password}
            onChange={this.handleChanges}
            name="password"
            />
          </p>
          <button onClick={this.logIn}>Log In</button>
        </div>
      )
  }

}




export default LogInPage;