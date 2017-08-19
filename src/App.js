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

  shelfChangeHandler() {
    BooksAPI.getAll().then((myReadBooks) => {
      var idToShelfMap = {};
      for (var i = 0 ; i < myReadBooks.length ; ++i) {
        idToShelfMap[myReadBooks[i]['id']] = myReadBooks[i]['shelf'];
      }
      this.setState({myReadBooks:[], idToShelfMap:{}});   // WTF??? For some reason without this the movement of the books when chaining shelfs is screwed up.
      this.setState({myReadBooks:myReadBooks, idToShelfMap:idToShelfMap});
    });
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