import React from "react";
import Toper2 from './Toper2';
import  { Component } from 'react';
import { Fragment } from 'react';
import {withRouter} from 'react-router-dom';

class SpinnerPage extends Component {
  componentDidMount(){

    setTimeout(
      function() {
        alert("registration sucessful");
        this.props.history.push('/login');
      }
      .bind(this),
      1000
  );
    //setTimeout(function(){
    //  this.props.history.push('/login');
    //},1000)
    
  }
  render() {
    return (
      <div class="spinner-border fast" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
}
     
export default SpinnerPage;


