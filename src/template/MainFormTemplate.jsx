import {FormField} from '../components/FormField'
import {FormSelect} from '../components/FormSelect'
import {FormRadio} from '../components/FormRadio'

const PREFIX_LIST = [
    {label: 'Mr.', value: 'mr'},
    {label: 'Mrs.', value: 'mrs'},
    {label: 'Miss.', value: 'miss'},
    {label: 'Ms.', value: 'ms'},
    {label: 'Dr.', value: 'dr'},
  ]

const GENDERS =  [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Unisex', value: 'unisex'},
]
export const MainForms = [
 {label:"Title", name:"prefix", type:"input", component:FormSelect, options: PREFIX_LIST, required: true},
 {label:"Last Name", name:"lname", type:"text", component: FormField, required: true},
 {label:"First Name", name:"fname", type:"text", component: FormField, required: true},
 {label:"Birth day", name:"birthday", type:"date", component: FormField, required: true},
 {label:"Nationality", name:"nationality", type:"input", component: FormField, required: false},
 {label:"Citizen ID", name:"citizen", type:"input", component: FormField, required: false},
 {label:"Gender", name:"gender", type:"radio", component: FormRadio, options: GENDERS, required: false},
 {label:"Mobile Phone", name:"mobile", type:"tel", component:FormField, required: true},
 {label:"Passport No", name:"passport", type:"input", component:FormField, required: false},
 {label:"Expected Salary", name:"salary", type:"input", component:FormField, required: true}
]

