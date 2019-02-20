import React from "react";

const WithAuthenticate = App => 
    class extends React.Component {
        render() {
            return <App /> ; 
        
        }
    }


export default WithAuthenticate;