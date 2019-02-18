import React from "react";
import "./SearchBar.css"


class SearchBar extends React.Component {
    // constructor() {
    //     super();
    //     this.state= ""
    // }
    render() {
        return (
            <div className="searchNav">

                <div className="Logos">
                    <img src="" alt="Camera Logo"/>
                    <img src="" alt="Instagram Logo"/>
                </div>
                
                <input type="text" placeholder="Search"/>
               
                <div className="navigationIcons">
                    <img src="" alt="location"/>
                    <img src="" alt="heart"/>
                    <img src="" alt="profile"/>
                </div>
            </div>
        )
    }
}

export default SearchBar;