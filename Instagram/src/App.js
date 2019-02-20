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
    submitNewComment = (e, newComment, imageUrl) => {
      e.preventDefault();
      const newCommentObject = {
        username: "philz",
        text: newComment
      }

      this.setState({
        dummyData: this.state.dummyData.map(post => {
          return post.imageUrl === imageUrl ? 
          {...post, 
            comments: [...post.comments, newCommentObject]
          } : post
        })
      })

    }

    // filterPost = (e) => {
    //   e.preventDefault();
    //   this.setState({
    //     dummyData: this.state.dummyData.filter(post => {
    //       return post.username === username ? 
    //       post : null
    //     })
    //   })
    // }

    
  
    render() {
    //console.log(this.state.dummyData);
    return (
      <div className="App">
          <SearchBar />  
          {/* filterPost={this.filterPost}  */}
          <PostContainer 
          dummyDatas={this.state.dummyData}
          handleSubmit={this.submitNewComment}
           />
      </div>
    );
  }
}

export default App;
