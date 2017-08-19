import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'

class BooksApp extends React.Component {

  state = {
    myReadBooks : [
    ],
    shelfs : [
      "Currently Reading",
      "Want To Read",
      "Read"
    ],
    idToShelfMap : {  // books ID to book shelf map
    }
  };

  constructor(props) {
    super(props);
    this.shelfChangeHandler = this.shelfChangeHandler.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((myReadBooks) => {
      var idToShelfMap = {};
      for (var i = 0 ; i < myReadBooks.length ; ++i) {
        idToShelfMap[myReadBooks[i]['id']] = myReadBooks[i]['shelf'];
      }
      this.setState({myReadBooks:myReadBooks, idToShelfMap:idToShelfMap});
    });
  }

  shelfChangeHandler(book, targetShelf) {

     console.log(book.toString() + " " + targetShelf);

    // A book in MyReads page changes shelf:
    // Deep copy the MyRead books array:
    var newMyReadBooks = [];
    for (var i = 0 ; i < this.state.myReadBooks.length ; ++i) {
      var copy = JSON.parse(JSON.stringify(this.state.myReadBooks[i]));
      newMyReadBooks.push(copy);
    }

    // Change only the book with the correct id:
    var found = false;
    for (var index = 0 ; index < newMyReadBooks.length ; ++index) {
      if (newMyReadBooks[index].id === book.id) {
        newMyReadBooks[index].shelf = targetShelf;
        found = true;
        break;
      }
    }

    // A book in Search Results page changes shelf:
    if (found === false) {
      var copy = JSON.parse(JSON.stringify(book));
      copy.shelf = targetShelf;
      newMyReadBooks.push(copy);
    }

    // Rebuild the Id to shelf map
    var idToShelfMap = {};
    for (var counter = 0 ; counter < newMyReadBooks.length ; ++counter) {
      idToShelfMap[newMyReadBooks[counter]['id']] = newMyReadBooks[counter]['shelf'];
    }

    this.setState({myReadBooks:newMyReadBooks, idToShelfMap:idToShelfMap});
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads shelfs={this.state.shelfs} myReadBooks={this.state.myReadBooks}  onShelfChange={this.shelfChangeHandler}/>
        )}/>
        <Route exact path="/search" render={() => (
          <Search idToShelfMap={this.state.idToShelfMap} onShelfChange={this.shelfChangeHandler} />
        )}/>
      </div>
    );
  }
}

export default BooksApp