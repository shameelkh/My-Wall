import { combineReducers } from 'redux'
import posts from './posts'
import users from './users'


const wallApp = combineReducers({posts, users})

export default wallApp;