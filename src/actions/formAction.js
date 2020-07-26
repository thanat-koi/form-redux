export const fromAction = {
    SAVE_FORM:'SAVE_FORM',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BY_ID: 'FETCH_BY_ID',
    UPDATE_FORM: 'UPDATE_FORM',
    DELETE_ITEM: 'DELETE_FORM'
}

export const saveForm = values => ({
    type: fromAction.SAVE_FORM,
    payload: values
})

export const fetchAll = () => ({ type: fromAction.FETCH_ALL, payload: {}})

export const updateForm = (id, values) => ({
    type: fromAction.UPDATE_FORM,
    payload: { id, values }
})

export const deleteItem = id => ({
    type: fromAction.DELETE_ITEM,
    payload: {id}
})

