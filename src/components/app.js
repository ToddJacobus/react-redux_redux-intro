import React from 'react';
import { Component } from 'react';
// import React, { Component } from 'react';


import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
// NOTE: this is a relative path. So we specify it relative to the components folder

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>

    );
  }
}
