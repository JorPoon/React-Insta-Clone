import React from "react";


const NewComment = props => {
    return  (
        <form onSubmit={props.onSubmit}>
        <input type="text" 
        value={props.newComment} 
        onChange={props.onChange} />
        <button>Add Comment</button>
        </form>
    )
}

export default NewComment;