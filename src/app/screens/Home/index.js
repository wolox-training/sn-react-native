import React, { Component } from 'react';
import dataBooks from "../../../data/books.json";
import Home from "./layout.js"
import "./styles.css";

class HomeContainer extends Component {
  state = { books: [], filter:"Seleccionar"}

  handleSearchChange = books => {
    this.setState({ books });
  }

  handleFilterChange = filter => {
    this.setState({ filter: filter.target.value });
  }

  componentWillMount(){
    this.setState({books: dataBooks})
  }

  render() {
    return (
      <Home
        handleFilterChange = {this.handleFilterChange}
        handleSearchChange = {this.handleSearchChange}
        filter= {this.state.filter}
        books = {this.state.books}
      />
    )
  }
}

export default HomeContainer;
