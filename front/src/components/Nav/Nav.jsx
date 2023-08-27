import React, {useState}  from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function Nav({onSearch}){

    return (
    <div>
        <div>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>

            <NavLink to="/about">
                <button>About</button>
            </NavLink>

            <NavLink to="/favorite">
                <button>Favorites</button>
            </NavLink>
        </div>

        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    </div>
    )
}

export default Nav