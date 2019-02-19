import React from "react";
import One from "./One";

// const Comment= (props) => {
//     console.log(props);
//     return (
//         <div>
//         {props.comments.map( (comment, index ) => {
//             <h1>HI</h1>
//         })}
//         </div>
//     )
// }

const Comment = props => {
  console.log("props")
    return (
      <div className="comment-text">
      {props.comments.map( (comment, index) => {
        return <One username={comment.username} text={comment.text} key={index}/>
      })}
      </div>
    
    )
  };

export default Comment;