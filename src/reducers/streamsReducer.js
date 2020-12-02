import { ReactReduxContext } from 'react-redux'
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    CREATE_STREAM,
    DELETE_STREAM,
} from '../actions/types'

const INITIAL_STATE = {}

const mapkeys = (objectArray, keyValue) => {
    const result = {}
    objectArray.map((obj) => {
        const objKey = obj[keyValue]
        result[objKey] = obj
    })
    return result
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            const newObject = { ...state }
            delete newObject[action.payload]
            return newObject
        case FETCH_STREAMS:
            return { ...state, ...mapkeys(action.payload, 'id') }
        default:
            return state
    }
}
