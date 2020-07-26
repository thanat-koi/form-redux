import React from 'react'
import { Field } from "redux-form"
export const FormRadio = ({label, name, options}) => (
    <div>
    <label>{label}: </label>
    {options.map(option => (<label>
        <Field name={name} value={option.value} component="input" type="radio" /> {option?.label}
    </label>))}
    </div>
)