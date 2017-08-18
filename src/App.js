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
    titleToShelfMap : {

    }
  };

  componentDidMount() {
    BooksAPI.getAll().then((myReadBooks) => {
      this.setState({myReadBooks});
      console.log(myReadBooks);
      var titleToShelfMap = {};
      for (var i = 0 ; i < myReadBooks.length ; ++i) {
        titleToShelfMap[myReadBooks[i]['title']] = myReadBooks[i]['shelf'];
      }
      this.setState({titleToShelfMap});
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads shelfs={this.state.shelfs} myReadBooks={this.state.myReadBooks} />
        )}/>
        <Route exact path="/search" render={() => (
          <Search titleToShelfMap={this.state.titleToShelfMap}/>
        )}/>
      </div>
    );
  }
}

export default BooksApp