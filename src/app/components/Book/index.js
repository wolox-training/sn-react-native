import React, { Component } from 'react';

import BookContainer from "./layout.js";
import "./styles.css";

export class Book extends Component {
  render(){
    return <BookContainer books= {this.props.books} />;
  }
}
