import React from "react"
import Comment from "./Comment"
import NewComment from "./NewComment"
import "./CommentSection.css"
import dummyData from "../../dummy-data";

// class CommentSection extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             comments: props.comments
//         }
//     };

//     render() {

//         console.log(props)
//         return (
//         <div>
//            {/* <CommentList comments={this.state.comments}/> */}
//             <NewComment />
//         </div>
            
//         ) 
//     }
// }
// class CommentSection extends React.Component {
//     constructor(props) {
//       super(props);

//     }
//     render() {
//         console.log(props)
//       return (
//         <div>
       
//         </div>
//       );
//     }
//   }

//array of objects of array of objects
const CommentSection = props => {
    console.log(props);
    return (
        props.comments.map( (comment,index) => {
           return  <Comment comments={props.comments} key={index} />
        })
    )
}





export default CommentSection;