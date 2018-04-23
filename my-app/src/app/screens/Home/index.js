import React, { Component } from 'react';
import dataBooks from "../../../data/books.json";
import defaultImage from "../../../assets/ASSETS/default_book.svg"
import searchImage from "../../../assets/ASSETS/search.svg"
import "./styles.css";

class Home extends Component {
  constructor(){
    super();
    this.state = {books: [], filter: "Seleccionar"}
  }

  componentWillMount(){
    this.setState({books: dataBooks})
  }

  filterBook(book,filterWord){
    if(this.state.filter === "Seleccionar"){
      return true;
    }
    else {
      let attributeFilter = this.state.filter === "Nombre" ? book.title : book.author;
      return attributeFilter.toLowerCase().includes(filterWord)
    }
  }

  updateBooks(e) {
    let filteredBooks = dataBooks.filter(book => this.filterBook(book,e.target.value));
    this.setState({books: filteredBooks})
  }

  updateFilter(e) {
    this.setState({filter: e.target.value})
  }

  render() {
    let books = this.state.books;

    return (
      <div className="home-container" >
        <div className="filters">
          <select onChange={this.updateFilter.bind(this)} className="select-filter selector">
            <option value="Seleccionar">Seleccionar filtro</option>
            <option value="Nombre">Nombre</option>
            <option value="Autor">Autor</option>
          </select>
          <input type="text" className="select-filter" onChange={this.updateBooks.bind(this)} placeholder="Buscar..." />
          <img className="search-filter" src={searchImage} />
        </div>
        <div className="books-container">
        {books.map(book =>
          <div key={book.id} className="book">
          <BookImage image_url={book.image_url} title={book.title} />
          <h3 className="book-title">{book.title}</h3>
          <h3 className="book-author">{book.author}</h3>
          </div>)}
        </div>
      </div>
    );
  }
}

class BookImage extends Component {
  constructor(props){
    super(props);
    this.state = {url: this.props.image_url,nameClass:"book-image"}
  }

  componentWillMount(){
    if(!this.props.image_url) {
      this.setState({url: defaultImage,nameClass: "defaultImage"})
    }
  }

  render() {
    return <img className={this.state.nameClass} src={this.state.url} alt={this.props.title}/>
  }
}

export default Home;
