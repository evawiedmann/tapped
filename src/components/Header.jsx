import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Eva's Tap Room - Keg Library</h1>
      <Link to="/">Home</Link> | <Link to="/NewKegForm">Create Keg Profile</Link>
    </div>
  );
}

export default Header;
