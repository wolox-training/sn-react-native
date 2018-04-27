import React, { Component } from 'react';
import BookContainer from "./layout.js";
import "./styles.css";

function Book({ books }) {
  return <BookContainer books= {books} />;
}

export default Book;
