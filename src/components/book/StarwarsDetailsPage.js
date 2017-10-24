import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PlanetDetails from './PlanetDetails'
import SpeciesDetails from './SpeciesDetails'
import PeopleDetails from './PeopleDetails'
import FilmsDetails from './FilmsDetails'
import StarshipsDetails from './StarshipsDetails'
import * as bookActions from '../../actions/bookActions';


class StarwarsDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
      this.props.fetchBookById(this.props.params.type,this.props.params.id);
    }

 

    render() {
        return (
            <div>
                <h1>Starwars {this.props.params.type} detail page!!</h1>
                { this.props.params.type == 'planets' ? <PlanetDetails data={this.props.book}/> : ''}
                { this.props.params.type == 'species' ? <SpeciesDetails data={this.props.book}/> : ''}
                { this.props.params.type == 'people' ? <PeopleDetails data={this.props.book}/> : ''}
                { this.props.params.type == 'films' ? <FilmsDetails data={this.props.book}/> : ''}
                { this.props.params.type == 'starships' ? <StarshipsDetails data={this.props.book} /> : ''}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
      book: state.book
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchBookById: (type,bookId) => dispatch(bookActions.fetchBookById(type,bookId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarwarsDetailsPage);
