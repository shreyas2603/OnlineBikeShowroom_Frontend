// components/NavBar.js
import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Bike Showroom</a>
        <button className="btn btn-outline-light my-2 my-sm-0">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
