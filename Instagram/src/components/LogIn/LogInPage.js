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

      <div className="log-in">

        <Liv inline>
        <FormGroup>
        <Label>UserName </Label>
          <Input 
          type="text"
          value={this.state.username}
          onChange={this.handleChanges}
          name="username"
          />
       
          </FormGroup>
          <FormGroup>
          <Label> Password</Label>
            <Input 
            type="text"
            value={this.state.password}
            onChange={this.handleChanges}
            name="password"
            />
         
          </FormGroup>
          <Putton primary onClick={this.logIn}>Log In</Putton>
        </Liv>

        </div>
      )
  }

}




export default LogInPage;