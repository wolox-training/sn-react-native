import React from 'react';
import {BookAttr} from "./components/BookAttr/index.js"
import {Suggestions} from "./components/Suggestions/index.js"
import {NewComment} from "./components/NewComment/index.js"
import {Comments} from "./components/Comments/index.js"
import dataBooks from "../../../data/books.json";

export class BookDetail extends React.Component {
  state = {book: ""}

  findBook(id){
    let numId = parseInt(id)
    return dataBooks.find(book => (book.id === numId))
  }

  componentWillMount(){
    this.setState({book: this.findBook(this.props.match.params.id)})
  }

  render(){
    return (
      <div>
        <BookAttr book={this.state.book}/>
        <Suggestions book={this.state.book}/>
        <NewComment book={this.state.book}/>
        <Comments book={this.state.book}/>
      </div>
    )
  }
}
