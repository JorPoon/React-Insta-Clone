import React from "react";

const One = props => {
    return (
        <div className="single-Comment">
         <p>{props.username}{': '}{props.text}</p>
        </div>
    )
}

export default One;