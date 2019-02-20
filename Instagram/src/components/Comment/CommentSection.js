import React from "react"
import Comment from "./Comment"
import NewComment from "./NewComment"
import "./CommentSection.css"
import dummyData from "../../dummy-data";

// class CommentSection extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             comments
//         }
//     };

//     render() {

//         console.log(props)
//         return (
//         // <div>
//         //    {/* <CommentList comments={this.state.comments}/> */}
//         //     <NewComment />
//         // </div>
//         <h1>hi</h1>
            
//         ) 
//     }
// }
class CommentSection extends React.Component {
    constructor(props) {
    super(props);
        this.state={
            newComment: " ",
            likes: this.props.likes
        }
    };

    onHandleChanges = (e) => {
        this.setState({
            newComment: e.target.value
        }) 
    }

    addLike = (e) => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
        }))
    }
    
    render() {
        //console.log(this.props.comments)
      return (
        <div className="comment-section">
        <p> <i  onClick={this.addLike} className="fa fa-heart"/> {this.state.likes}  </p>
        
       
       {this.props.comments.map( (comment, index) => {
        return  <Comment key={index} comment={comment} />
       })}
{/* 
       <form onSubmit={(e)=> {this.props.handleSubmit(e,this.state.newComment, this.props.imageUrl )} }>
        <input type="text" 
        value={this.state.newComment} 
        onChange={this.onHandleChanges} />
        <button>Add Comment</button>
        </form> 
        
          <form onSubmit={props.onSubmit}>
        <input type="text" 
        value={props.newComment} 
        onChange={props.onHandleChanges} />
        <button>Add Comment</button>
        </form>
        
        */}
       <NewComment 
       onSubmit={(e)=> {this.props.handleSubmit(e,this.state.newComment, this.props.imageUrl )}} 
       newComment={this.state.newComment}
       onChange={this.onHandleChanges}
       />
   </div>
      );
    }
  }

//array of objects of array of objects
// const CommentSection = props => {
//     console.log(props);
//     return (
//        <div className="comment-section">
//             <i className="fa fa-heart" />

//            {props.comments.map( (comment, index) => {
//             return  <Comment key={index} comment={comment} />
//            })}

//            <NewComment />
//        </div>
//     )
// }





export default CommentSection;