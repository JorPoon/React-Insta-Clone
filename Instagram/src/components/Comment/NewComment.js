import React from "react";


const NewComment = props => {
    return  <form onSubmit={(e)=> {this.props.handleSubmit(e,this.state.newComment, this.props.imageUrl )} }>
    <input type="text" 
    value={this.state.newComment} 
    onChange={this.onHandleChanges} />
    </form>
}

export default NewComment;