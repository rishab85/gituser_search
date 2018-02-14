import React, {Component} from 'react';
import Searchbar from './searchbar';
import Searchlist from './searchlist';

class SearchPage extends Component{
  render(){
    return(
      <div className="searchWrapper">
        <Searchbar />
        <Searchlist />
      </div>
    )
  }
}

export default SearchPage
