import React from "react";
import "./PostContainer.css"
import PostCard from "./PostCard";
import CommentSection from "../Comment/CommentSection";

const PostContainer = (props) => {
    //console.log(props)
    return (
        <div className="container">
           { props.dummyDatas.map(data => 
             <PostCard key={data.imageUrl} 
            //  username={data.username}
            //  imageUrl={data.imageUrl}
            //  thumbnailUrl={data.thumbnailUrl}
            //  comments={data.comments}
            post={data}
            handleSubmit={props.handleSubmit}
             />
            )}
        </div>
    )
}







export default PostContainer;