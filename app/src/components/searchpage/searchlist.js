import React, {Component} from 'react';
import {connect} from 'react-redux';

class Searchlist extends Component{
  render(){
    return(
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

export default connect(mapStateToProps)(Searchlist);
