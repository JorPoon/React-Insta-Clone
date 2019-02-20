import React from "react";

const WithAuthenticate = FirstComponent =>  SecondComponent => props => {
 if (localStorage.getItem("user") && localStorage.getItem("password")) {
    return <FirstComponent />
 }
    return <SecondComponent />
}

export default WithAuthenticate;