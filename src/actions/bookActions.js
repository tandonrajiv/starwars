import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchStarwarsSuccess = (books) => {
  return {
    type: actionTypes.FETCH_STARWARS_SUCCESS,
    books
  }
};

export const fetchStarwarsLoading = (books) => {
  return {
    type: actionTypes.FETCH_STARWARS_LOADING
  }
};

/*below action will call when user attempt to login*/
export const loginSubmitSuccess = (book) => {
  return {
    type: actionTypes.CREATE_SUCCESS,
    book
  }
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  }
};

export function setCurrentUser(user) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(setCurrentUser({}));
  }
}

export const loginSubmit = (book) => {
  return (dispatch) => {
    var myObj = {}
    /*when use login in that case we will save that token.*/
    if(book.username == 'Luke Skywalker' && book.password == '19BBY'){
      var myObj = { "status": true,  
       "name":"Luke Skywalker", "token":Math.random() };
      localStorage.setItem("token", JSON.stringify(myObj));
      dispatch(setCurrentUser(myObj))
    } else {
      var myObj = { "status": false }
    }
    dispatch(loginSubmitSuccess(myObj))
  };
};


export const fetchStarwars = (searchStr) => {
  
    return (dispatch) => {
        dispatch(fetchStarwarsLoading())
        function getPlanets() {
            return Axios.get(`https://swapi.co/api/planets/?search=${searchStr}`);
        }

        function getSpecies() {
            return Axios.get(`https://swapi.co/api/species/?search=${searchStr}`);
        }

        function getPeople() {
            return Axios.get(`https://swapi.co/api/people/?search=${searchStr}`);
        }

        function getFilms() {
            return Axios.get(`https://swapi.co/api/films/?search=${searchStr}`);
        }

        function getStarShips() {
            return Axios.get(`https://swapi.co/api/starships/?search=${searchStr}`);
        }

        function do_merge(roles) {

            // Custom merge function ORs together non-object values, recursively
            // calls itself on Objects.
            var merger = function(a, b) {
                if (_.isObject(a)) {
                    return _.merge({}, a, b, merger);
                } else {
                    return a || b;
                }
            };

            // Allow roles to be passed to _.merge as an array of arbitrary length
            var args = _.flatten([{}, roles, merger]);
            return _.merge.apply(_, args);
        }
        var combinedData = [];
        Axios.all([getPlanets(), getSpecies(),
                getPeople(), getFilms(), getStarShips()
            ])
            .then(Axios.spread(function(planets, species, peoples, films, starships) {
                var allData = [planets, species, peoples, films, starships];

                // Both requests are now complete

                let combined = [];
                allData.forEach((item) => {
                    combined = combined.concat(item.data.results);
                });
                
                dispatch(fetchStarwarsSuccess(combined))
            })).catch(error => {
                throw (error);
            });

    };
};

export const fetchBookById = (type,Id) => {
  
  return (dispatch) => {
    var apiUrl = `https://swapi.co/api/${type}/${Id}`;
    console.log(apiUrl,'apiUrl')
    return Axios.get(apiUrl)
      .then(response => {

        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};