import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import './styles.scss'
const required = value => value ? undefined : 'Required'

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    {/*<label>{label}</label>*/}
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <p className="text-danger">{error}</p>) ||
          (warning && <p className="text-warning">{warning}</p>))}
    </div>
  </div>
)

class LoginForm extends Component {   
  constructor(props) {
    super(props)
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(data) {
    this.props.submitForm(data)
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
    <div> 
      
        <div className="wrapper">
        <form name="login" className="form-signin" onSubmit={handleSubmit(this.handleSubmit)} >       
          <h2 className="form-signin-heading">Please login</h2>
          <div className="form-group">
          <Field
            name="username"
            component={renderField}
            type="text"
            placeholder="Please enter username"
            validate={[ required]}
          />
          <br/>
          </div>
          <div className="form-group">
          <Field
            name="password"
            component={renderField}
            type="password"
            className="form-control"
            placeholder="Please enter password"
            validate={[ required]}
          />
          </div>
          <button 
          className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </form>
      </div>
    </div>  
    )
  }
}

export default reduxForm({
  form: 'login',  // a unique identifier for this form
  destroyOnUnmount: true,
})(LoginForm)
