// Set up your root reducer here...
import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  form: formReducer,
});
