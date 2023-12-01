import React from 'react';
import logo from '../../assets/logo.png';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row navbar">
        <div className="col-2">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
        <div className="col-7 col-md-8 searchbar">
          <input type="text" className="form-control" placeholder="Search a song of your choice" />
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="col-3 col-md-2 feedback" >
          <button className="btn btn-dark">Give Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
