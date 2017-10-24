import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Link,browserHistory,router } from 'react-router';
import * as bookActions from '../../actions/bookActions';
import { history } from '../common/history';

class Book extends React.Component{
  constructor(props){
    super(props);
  }

  submitForm(input){
    
    this.props.loginSubmit(input);
  }
  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.books.isAuthenticated , nextProps.books.book.status)
      if (nextProps.books.isAuthenticated && nextProps.books.book.status) {
        browserHistory.push('/starwars');
      } 
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          { this.props.books.book && this.props.books.book.status == false ? 
          <div className="alert alert-danger alert-dismissable fade in">
            <strong>Error!</strong> Invalid credential !!
          </div>
          : ''}
          <LoginForm submitForm={this.submitForm.bind(this)} />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: book => dispatch(bookActions.loginSubmit(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
