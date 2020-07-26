import React from 'react'
import { Field } from "redux-form"
export const FormSelect = ({label, name, options, value}) => (
    <div>
    <label>{label}: </label>
    <Field component='select' name={name} value={value}> {options?.map( el => (<option value={el?.value}>{el?.label}</option>))} </Field>
    </div>
)