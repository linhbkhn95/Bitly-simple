import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 
import link from './link'
const IndexReducer = combineReducers({
    link,
    form,
})

export default IndexReducer