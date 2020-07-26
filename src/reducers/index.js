import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import {itemStore} from './item'
const rootReducer = combineReducers({
    form: reduxForm,
    itemStore
})


export default rootReducer ;
