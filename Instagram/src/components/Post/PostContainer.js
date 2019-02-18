import React from "react";
import "./PostContainer.css"
import PostCard from "./PostCard";

const PostContainer = (props) => {
    console.log(props)
    return (
        <div>
           { props.dummyDatas.map(data => 
             <PostCard key={data.timestamp} 
             username={data.username}
             imageUrl={data.imageUrl}
             />
            )}
        </div>
    )
}







export default PostContainer;