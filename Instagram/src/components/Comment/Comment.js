import React from "react";


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
  //console.log("props")
    return (
      <div className="comment-text">
      {/* {props.comments.map( (comment, index) => {
        return <One username={comment.username} text={comment.text} key={index}/>
      })} */}
      <p> <strong>{props.comment.username}</strong>: {props.comment.text} </p>
      </div>
    
    )
  };

export default Comment;