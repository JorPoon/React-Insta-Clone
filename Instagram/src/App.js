import React, { Component } from 'react';
import './App.css';
import PostPage from "./components/Post/PostPage";
import WithAuthenticate from "./components/Authentication/WithAuthenticate";
import LogInPage from './components/LogIn/LogInPage';

const Clone = WithAuthenticate(PostPage)(LogInPage);

class App extends Component {
    constructor () {
      super();
      this.state= {
        username: "",
        password: ""
        // dummyData
      }
    }

    // componentDidMount() {
    //   this.setState({ dummyData: dummyData});
    // }

    // submitNewComment = (e, newComment, imageUrl) => {
    //   e.preventDefault();
    //   const newCommentObject = {
    //     username: "philz",
    //     text: newComment
    //   }

      // this.setState({
      //   dummyData: this.state.dummyData.map(post => {
      //     return post.imageUrl === imageUrl ? 
      //     {...post, 
      //       comments: [...post.comments, newCommentObject]
      //     } : post
      //   })
      // })
    render() {
      //console.log(this.state.dummyData);
      return (
        
       <div>

         <Clone />
         {/* <LogInPage /> */}
        {/* <PostPage /> */}

       </div>
        
        // <div className="App">
        //     <SearchBar />  
        //     {/* filterPost={this.filterPost}  */}
        //     <PostContainer 
        //     dummyDatas={this.state.dummyData}
        //     handleSubmit={this.submitNewComment}
        //      />
        // </div>
      );
  }
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

    
  
    



export default App;
