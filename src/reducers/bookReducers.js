
let loginUserData = window.localStorage.getItem("token")
//console.log(loginUserData,"  Reducer")
export const booksReducer = (state = [] , action) => {
 //console.log(action.type, 'action.type',loginUserData ? true : false)
  switch (action.type) {
    case 'CREATE_SUCCESS':
        //return action.book;
        return Object.assign({}, state, {
            book: action.book,
            isAuthenticated: true
          });
    case 'FETCH_STARWARS_SUCCESS':
          return Object.assign({}, state, {
            books: action.books,
            isFetching: false,
            isAuthenticated: loginUserData ? true : false
          });
    case 'FETCH_STARWARS_LOADING':
           return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: loginUserData ? true : false,
          });      
   case 'SET_CURRENT_USER':
    return Object.assign({}, state, {
            isAuthenticated: false,
          });      
    default:
          return state;
  }
};

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOK_BY_ID_SUCCESS':
      return action.book;
    default:
      return state;
  }
};
