import React, { Component } from 'react';
import { connect } from 'react-redux';
  // the connect function is the code that connects react to redux
import { selectBook } from '../actions/index';
  // get our action creator
import { bindActionCreators } from 'redux';
  // this function does much of the wiring to allow the action creator
  // to send action information through all the reducers.

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      // since .selectBook() esists as a prop of book we can pass it to a click
      // event handler
      return(
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }

          className="list-group-item " >
          { book.title }
        </li>
      )
    });
  }

  render () {
    return (
      <ul className = "list-group col-sm-4" >
        {this.renderList()}
      </ul>
    );
  };
}

function mapStateToProps (state) {
  // Whatever gets returned here will show up as props inside BookList
  // this function is how react will connect to redux
  // it takes a state defined in a reducer (redux) and returns props that are
  // connected to a component (BookList, in this case)

  return {
    books: state.books
  }
}

// this is where the magic happens...
// anythin returned by this function will end up as props in the
// BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to
  // all reducers.
  return bindActionCreators({selectBook:selectBook},dispatch)
    // the key value pair passed into bindActionCreators is the prop key
    // that we can call in the container BookList, while the value is the
    // action creater function itself.
}

// now export the CONTAINER not the component BookList
// the function 'connect' takes a container and a Component
// and connects them and produces a container that is a component...
// that is aware of the internal state of the component.
// <((__crayon__(()
// add the magical action creator cascade as an argument to connect function
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
  // this promotes BookList from a react component into a react-redux container
  // It needs to know about the state managed by redux (mapStateToProps) and
  // also needs to know about specific actions that will change that state
  // (mapDispatchToProps).
