import React from "react";
import "./SearchBar.css"
// import iglogo from "./img"


const SearchBar = props => {
    // constructor(props) {
    //     super(props);
    //     this.state= 
        return (
            <div className="searchNav">

                <div className="Logos">
                    <img src="" alt="Camera Logo"/>
                    <img src="" alt="Instagram Logo"/>
                </div>
                
                <input type="text" placeholder="Search" onSubmit={props.filterPost} />
               
                <div className="navigationIcons">
                    <img src="" alt="location"/>
                    {/* <img src="" alt="heart"/> */}
                    <i className="fa fa-heart" />
                    <img src="" alt="profile"/>
                </div>
            </div>
        )
    
}

export default SearchBar;