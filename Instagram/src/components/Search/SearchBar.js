import React from "react";
import styled , {css} from "styled-components";
import "./SearchBar.css"
// import iglogo from "./img"

const CloneHeader = styled.header`
    display: flex;
    margin: auto 10%;
`


const SearchBar = props => {
    // constructor(props) {
    //     super(props);
    //     this.state=


        return (
            <CloneHeader className="searchNav">

                <div className="Logos">
                <i class="fa fa-camera" aria-hidden="true"></i>
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
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    {/* <img src="" alt="heart"/> */}
                    <i className="fa fa-heart" />
                    <i class="fa fa-user-circle" aria-hidden="true" onClick={props.logOut}></i>
                    {/* <img src="" alt="profile" onClick={props.logOut}/> */}
                </div>
            </CloneHeader>
        )
    
}

export default SearchBar;