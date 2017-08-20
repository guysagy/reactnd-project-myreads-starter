import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Shelf from './Shelf'

/*
MyReads page component.
*/

class MyReads extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelfs.map((shelfName)=>(<Shelf key={shelfName} name={shelfName} myReadBooks={this.props.myReadBooks} onShelfChange={this.props.onShelfChange}/>))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }

}

export default MyReads