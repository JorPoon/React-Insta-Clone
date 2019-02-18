import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/Search/SearchBar";
import PostContainer from './components/Post/PostContainer';

class App extends Component {
    constructor () {
      super();
      this.state= {
        dummyData
      }
    }
  render() {
    console.log(dummyData);
    return (
      <div className="App">
          <SearchBar />
          <PostContainer dummyDatas={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
