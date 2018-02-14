import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchData, setActive} from './actions/userlist_action';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Searchpage from './components/searchpage/';
import Contact from './components/contact';
class App extends Component {

constructor(props){
  super(props);


}


  render() {
    console.log(this.props.isActive);
    return (
      <Router>
        <div className="container">
            <Header />
              <Route path="/search" component={Searchpage} />
              <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
