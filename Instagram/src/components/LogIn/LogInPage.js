import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled , {css} from "styled-components";
import "./LogInPage.css";


const Putton = styled.button`
padding: 6px 10px;
margin: 5px;
border: none;
border-radius: 3px;
color: white;

&:hover {
  padding: 0.5em 3em;
  background-color: lavender;
  color: gray;
}

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`
const Liv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 15px
`

const LoggerBorder = styled.div`
margin: 200px 400px;
border: 1px solid black;
border-radius: 50px;
background-color: rgba(50, 115, 220, 0.3);
`

const Stagram = styled.h1`
font-family: "Comic Sans MS", cursive, sans-serif;
text-decoration: underline;
`

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

      <LoggerBorder className="log-in">

        <Liv inline>
            <Stagram>CloneStagram</Stagram>
        <FormGroup>
        {/* <Label>UserName </Label> */}
          <Input 
          type="text"
          value={this.state.username}
          onChange={this.handleChanges}
          name="username"
          placeholder="Username"
          />
       
          </FormGroup>
          <FormGroup>
          {/* <Label> Password</Label> */}
            <Input 
            type="text"
            value={this.state.password}
            onChange={this.handleChanges}
            name="password"
            placeholder="Password"
            />
         
          </FormGroup>
          <Putton primary onClick={this.logIn}>Log In <i class="fa fa-camera" aria-hidden="true"></i> </Putton>
          
        </Liv>

        </LoggerBorder>
      )
  }

}




export default LogInPage;