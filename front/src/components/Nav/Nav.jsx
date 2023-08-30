import React, {useState}  from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function Nav({onSearch}){
    return (
        <nav className="nav">
          <div className="botonesNav">
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
        
          <div className="searchBar">
            <SearchBar onSearch={onSearch} />
          </div>
          {/* filtro */}
        </nav>
      );
}

export default Nav