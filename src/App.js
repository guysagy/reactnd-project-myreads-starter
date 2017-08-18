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
    idToShelfMap : {
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then((myReadBooks) => {
      console.log(myReadBooks);
      this.setState({myReadBooks});
      var idToShelfMap = {};
      for (var i = 0 ; i < myReadBooks.length ; ++i) {
        idToShelfMap[myReadBooks[i]['id']] = myReadBooks[i]['shelf'];
      }
      this.setState({idToShelfMap});
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads shelfs={this.state.shelfs} myReadBooks={this.state.myReadBooks} />
        )}/>
        <Route exact path="/search" render={() => (
          <Search idToShelfMap={this.state.idToShelfMap}/>
        )}/>
      </div>
    );
  }
}

export default BooksApp