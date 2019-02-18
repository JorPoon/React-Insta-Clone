import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg, CardHeader } from 'reactstrap';
import "./PostCard.css"

 
const PostCard = (props) => {
  console.log(props)
    return (
      <div>
      <Card>
        <CardHeader>{props.username}</CardHeader>
        <CardImg className="postImage" src={props.imageUrl} alt="Card image cap" />
        {/* <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody> */}
      </Card>
    </div>
    );
  };
  
  export default PostCard;   
  
