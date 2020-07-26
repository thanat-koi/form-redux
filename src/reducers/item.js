import {fromAction} from '../actions/formAction'

const initState = {
    dataStore: [],
    isSaving: false
}

export const itemStore = (state = {...initState}, action) => {
    console.log(state)
    switch (action.type) {
        case fromAction.UPDATE_FORM :
            const prevData = state.dataStore.find(el => el.id === action?.payload?.id)
            const updateData = {...prevData, ...action.payload.values}
            return {...state, dataStore: [...state.dataStore.filter(el => el.id !== action?.payload?.id), ...updateData]}
        case fromAction.DELETE_ITEM :
            return {...state, dataStore: state.dataStore.filter((el) => el.id !== action.payload.id)}
        case fromAction.SAVE_FORM:
            const pDataStore = [...state.dataStore]
            pDataStore.push(action.payload)
            return {...state, dataStore: pDataStore}
        default:
            return state
    }
}
