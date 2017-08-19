import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'

class BooksApp extends React.Component {

  state = {
    myReadBooks : [],
    shelfs : ["Currently Reading","Want To Read","Read"],
    idToShelfMap : {}  // Book ID to book shelf mapping.
  };

  constructor(props) {
    super(props);
    this.loadShelfsData = this.loadShelfsData.bind(this);
  }

  componentDidMount() {
    this.loadShelfsData();
  }

  loadShelfsData() {
    BooksAPI.getAll().then((myReadBooks) => {
      const idToShelfMap = {};
      for (let i = 0 ; i < myReadBooks.length ; ++i) {
        idToShelfMap[myReadBooks[i]['id']] = myReadBooks[i]['shelf'];
      }
      // TODO: For some reason, without the following line, the movement of the books when chaining shelfs is incorrect in some scenarios.
      // Needs to be checked why.
      this.setState({myReadBooks:[], idToShelfMap:{}});
      this.setState({myReadBooks:myReadBooks, idToShelfMap:idToShelfMap});
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads shelfs={this.state.shelfs} myReadBooks={this.state.myReadBooks} onShelfChange={this.loadShelfsData}/>
        )}/>
        <Route exact path="/search" render={() => (
          <Search idToShelfMap={this.state.idToShelfMap} onShelfChange={this.loadShelfsData} />
        )}/>
      </div>
    );
  }
}

export default BooksApp