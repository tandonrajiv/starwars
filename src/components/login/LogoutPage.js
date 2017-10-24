import React from 'react';
import PropTypes from 'prop-types'; 
import { Link,browserHistory,router } from 'react-router';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions'
class LogoutPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    localStorage.removeItem('token');
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: book => dispatch(bookActions.logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
