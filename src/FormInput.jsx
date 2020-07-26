import React from 'react';
import { reduxForm } from "redux-form";
import {MainForms} from './template/MainFormTemplate'
import {saveForm} from './actions/formAction'
import { useDispatch } from 'react-redux'

const FormInput = (props) => {
  const disp = useDispatch()
  const submitForm = (values) => {
    disp(saveForm(values))
  }
    return (
      <div style={{display: 'inline'}}>
        <form onSubmit={props.handleSubmit(submitForm)}>
          {MainForms.map(form => <form.component key={form.name} {...form}  />)}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
}


export default reduxForm({ form: "formInput"})(FormInput);