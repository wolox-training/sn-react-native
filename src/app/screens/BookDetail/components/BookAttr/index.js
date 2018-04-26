import React from "react"

export class BookAttr extends React.Component{


  render(){
    return(
      <div>
        <img className="detail-image" src={this.props.book.image_url}/>
        <h1>{this.props.book.title}</h1>
        <h2>{this.props.book.author}</h2>
        <h2>{this.props.book.year}</h2>
        <h2>{this.props.book.genre}</h2>
        <h3>{this.props.book.publisher}</h3>
        <button>Alquilar</button>
      </div>
    )
  }
}
