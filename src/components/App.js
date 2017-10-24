import React  from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import './app.scss';

//const App = (props) => {
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    //console.log(this.props.isAuthenticated, 'this.props.isAuthenticated')
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Test logo</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/starwars">Starwars</Link></li> 
                {this.props.isAuthenticated ?
                  <li><Link to="/logout">Logout</Link></li> :
                  <li><Link to="/login">Login</Link></li>  }
              </ul>
            </div>
          </div>
        </nav>
        {/* Each smaller components */}
        {this.props.children}
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state.books,"asas")
  return {
    isAuthenticated: state.books.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

//export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);

