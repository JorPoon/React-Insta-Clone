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
                <form  onSubmit={props.filterPost} >
                <input 
                type="text"
                placeholder="Search" 
               
                onChange={props.searchHandleChanges}  
                name="search"
                value={props.search}
                />
               </form>
                <div className="navigationIcons">
                    <img src="" alt="location"/>
                    {/* <img src="" alt="heart"/> */}
                    <i className="fa fa-heart" />
                    <img src="" alt="profile" onClick={props.logOut}/>
                </div>
            </div>
        )
    
}

export default SearchBar;