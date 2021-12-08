import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';

const rootReducer = combineReducers({ 
    jobs: jobReducer,
    auth: authReducer,
    applications: applicationReducer
})
export default rootReducer;