import { combineReducers } from 'redux';
import { counterReducer } from '../counter';
import { authReducer } from '../auth';

export default combineReducers<any>({
	counter: counterReducer,
	auth: authReducer
});
