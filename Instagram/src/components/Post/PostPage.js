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
        array: dummyData,
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


    // filterPost = (e) => {
    // e.preventDefault();
    //  this.setState({
    //    dummyData: this.state.dummyData.filter( post => {
    //      return post.username
    //             .toLowerCase()
    //             .includes(this.state.search.toLowerCase())
    //     })
    //   // dummyData: this.state.dummyData[1]
    //  })
    //   console.log("hello")
    // }


    
  
    render() {
    return (
      <div className="PostPage">
          <SearchBar logOut={this.LogOut} 
          // filterPost={this.state.dummyData.filter()} 
          searchHandleChanges={this.searchChanges}
          search={this.state.search}
          />  
          {/* filterPost={this.filterPost}  */}
          <PostContainer 
          dummyDatas={this.state.dummyData.filter(post => {
            return post.username
                  .toLowerCase()
                   .includes(this.state.search.toLowerCase())
          })}
          handleSubmit={this.submitNewComment}
           />
      </div>
    );
  }
}




export default PostPage;