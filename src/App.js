import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'

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
          <MyReads shelfsData={this.state.shelfs} booksData={this.state.books} />
        )}/>
        <Route exact path="/search" render={() => (
          <Search />
        )}/>
      </div>
    );
  }
}

export default BooksApp