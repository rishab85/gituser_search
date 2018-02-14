import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './../App.css';

class Header extends Component{
  render(){
    return(
      <div className="navigation">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/search"><li>Search</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
      </div>
    );
  }
}

export default Header;
