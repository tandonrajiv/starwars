import React, { Component } from 'react'
import { Field, reduxForm,stopSubmit } from 'redux-form'
import './styles.scss'
const required = value => value ? undefined : 'Required'

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    {/*<label>{label}</label>*/}
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
    </div>
  </div>
)

class SearchForm extends Component {   
  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(data) {
    this.props.submitSearch(data);
    
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
    <div> 
      
        <div className="wrapper">
        <h2> Search by</h2>
        <p>  Films, Characters, Species, Starships & Planets</p>

        <form className="form-signin">       
          
          <Field
            name="username"
            component={renderField}
            type="text"
            placeholder="Please enter"
            onChange={e => this.onChange(e.target.value)}
          />
             
        </form>
      </div>
    </div>  
    )
  }
}

export default reduxForm({
  form: 'login',  // a unique identifier for this form
  destroyOnUnmount: true,
})(SearchForm)
