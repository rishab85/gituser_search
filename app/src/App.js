import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchData, setActive} from './actions/userlist_action'
import './App.css';

class App extends Component {

constructor(props){
  super(props);


}

  handleChange = (event) => {
    const url= 'https://api.github.com/search/users?q='+ event.target.value;
    this.props.fetchData(url);
  }

  handleClick = (event) =>{
    console.log('helo');
    const name = event.target.name;
    let last = this.props.items.length-1;
    let active = this.props.isActive;
    console.log(this.props.isActive);
    if(name==='next' || event.key==="ArrowDown"){
      if(active<last){
        this.props.setActive(this.props.isActive+1)
        window.scrollBy(0,111);
      }
    }

    if(name==='prev' || event.key=="ArrowUp"){
      if(active>0){
        this.props.setActive(active-1)
        window.scrollBy(0,-111);
      }
    }
  }

  render() {
    console.log(this.props.isActive);
    return (
      <div className="container">
        <div className="row search-bar">
          <div className="col-lg-2">

          </div>
          <div className="col-lg-8">
              <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button" name="prev" onClick={this.handleClick} >Prev</button>
                </span>
              <input type="text" onChange={this.handleChange} onKeyDown={this.handleClick} className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button" name="next" onClick={this.handleClick}>Next</button>
                </span>

              </div>
          </div>
          <div className="col-lg-2"></div>
        </div>

          <div className="row" style={{marginTop:'40px'}}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <ul className="list-group">
              {this.props.items.map((item, index) => {
                return <a href={item.html_url} target="blank" key={item.login}><li className={"list-group-item " + (this.props.isActive===index?"active":"test")} key={item.login}>
                  <img src={item.avatar_url} width="50"/>
                  <h4>{item.login}</h4>
                </li></a>
              })}

              </ul>
            </div>
            <div className="col-lg-2"></div>
          </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    items : state.items,
    hasError : state.hasError,
    isLoading : state.isLoading,
    isActive : state.isActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData : (url) => dispatch(fetchData(url)),
    setActive : (active) => dispatch(setActive(active))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
