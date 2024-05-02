import contactReducer from './user.reducer'
import {combineReducer} from 'redux'
const rootReducer = combineReducer({
    contact: contactReducer
})
export default rootReducer

