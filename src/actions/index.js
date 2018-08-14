// here we add the action creators which are just functions
// that return an action definition object with information about
// the action

export function selectBook(book) {
  // action creators return objects with action information
  return {
    type:'BOOK_SELECTED',
    payload: book
  }
}
