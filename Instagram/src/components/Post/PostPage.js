import React, { Component } from 'react';
import dummyData from "../../dummy-data";
import SearchBar from "../Search/SearchBar";
import PostContainer from "./PostContainer";

class PostPage extends Component {
    constructor () {
      super();
      this.state= {
        dummyData
      }
    }

    componentDidMount() {
      this.setState({ dummyData: dummyData});
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

    LogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
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
      <div className="PostPage">
          <SearchBar logOut={this.LogOut} />  
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