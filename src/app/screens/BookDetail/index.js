import React, { Component } from 'react';
import {BookAttr} from "./components/BookAttr/index.js"
import {Suggestions} from "./components/Suggestions/index.js"
import {NewComment} from "./components/NewComment/index.js"
import {Comments} from "./components/Comments/index.js"

export class BookDetail extends React.Component {
  state = {book:""}

  componentWillMount(){

  }

  render(){
    return (
      <div>
        <BookAttr />
        <Suggestions />
        <NewComment />
        <Comments />
      </div>
    )
  }
}
