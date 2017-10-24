import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import * as bookActions from '../../actions/bookActions';
import SearchForm from './SearchForm';

import './styles.scss'
class StarwarsPage extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentWillMount() {
   this.props.fetchStarwars('');
  }
  
  componentWillReceiveProps(nextProps, nextContext){
    //console.log(nextProps, 'nextProps')
    
  } 
  submitSearch(input){
    
    this.props.fetchStarwars(input);
  }
  
  render(){
    
   
    return(
      <div className="row">
        <div className="col-md-4">

        <SearchForm submitSearch={this.submitSearch.bind(this)} />
        </div>
        <div className="col-md-8">
          <div className="row">
            {this.props.books && this.props.books.map((b, i) => {
              return(
               <div key={i} className="product col-sm-6 col-md-4 col-lg-3">
                <div className="well">
                <Link to={`/starwars/${b.url.replace("https://swapi.co/api/", "")}`}> {b.name ? b.name : b.title}</Link> 
                <br/>
                { b.diameter &&
                  <p>
                    <span>Diameter: </span>{b.diameter} 
                  </p>
                }
                { b.language &&
                  <p>
                    <span>Language: </span>{b.language} 
                  </p>
                }
                { b.birth_year &&
                  <p>
                    <span>Birth year: </span>{b.birth_year} 
                  </p>}
                { b.director &&
                  <p>
                    <span>Director: </span>{b.director} 
                  </p>
                }
                { b.model &&
                  <p>
                    <span>Model: </span>{b.model} 
                  </p>
                }
                </div>
              </div>
             )
            })}
            { this.props.isFetching ? 'Loading, Please wait': '' }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state.books.isFetching)
  return {
    books: state.books.books,
    isFetching: state.books.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStarwars: book => dispatch(bookActions.fetchStarwars(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StarwarsPage);
