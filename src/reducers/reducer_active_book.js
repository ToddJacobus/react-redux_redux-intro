// the state here is only the container state, not the application
// state. The state gets "called" every time an action is passed in,
// i.e., the state gets updated every time "something" happens.

export default function (state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
  // redux does not let us return a undefined state. It will throw an error
}
