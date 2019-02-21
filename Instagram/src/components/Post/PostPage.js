import React, { Component } from 'react';
import dummyData from "../../dummy-data";
import SearchBar from "../Search/SearchBar";
import PostContainer from "./PostContainer";
import LogInPage from "../LogIn/LogInPage";

class PostPage extends Component {
    constructor () {
      super();
      this.state= {
        dummyData: [],
        search: "",
      }
    }

    componentDidMount() {
      this.setState({ dummyData: dummyData});
    }

    submitNewComment = (e, newComment, imageUrl) => {
      e.preventDefault();
      const newCommentObject = {
        username: localStorage.getItem("user"),
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

    LogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    searchChanges = e => {this.setState({[e.target.name]: e.target.value})}


    filterPost = (e) => {
      e.preventDefault();
     this.setState({
       dummyData: this.state.dummyData.filter(post =>  post.username === this.state.search)
      // dummyData: this.state.dummyData[1]
     })
      console.log("hello")
    }


    
  
    render() {
    return (
      <div className="PostPage">
          <SearchBar logOut={this.LogOut} 
          filterPost={this.filterPost} 
          searchHandleChanges={this.searchChanges}
          search={this.state.search}
          />  
          {/* filterPost={this.filterPost}  */}
          <PostContainer 
          dummyDatas={this.state.dummyData}
          handleSubmit={this.submitNewComment}
           />
      </div>
    );
  }
}




export default PostPage;