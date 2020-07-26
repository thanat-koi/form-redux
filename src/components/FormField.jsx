import React from 'react'
import { Field } from "redux-form"
export const FormField = ({label, type, name, required, value}) => {
    return (
    <div>
        <label>{label}: </label>
        <Field component='input' type={type} name={name} required={required} value={value} />
    </div>
    )
}
