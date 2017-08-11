import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books : [
    ],
    shelfs : [
      "Currently Reading", 
      "Want To Read", 
      "Read"
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  } 

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks shelfsData={this.state.shelfs} booksData={this.state.books} />
        )}/>
        <Route exact path="/search" render={() => (
          <SearchBooks />
        )}/>
      </div>
    );
  }
}

export default BooksApp