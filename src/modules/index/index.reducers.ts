import { combineReducers } from 'redux';
import { counterReducer } from '../counter';
import { authReducer } from '../auth';
import { bodyPartsReducer } from '../bodyParts';

export default combineReducers<any>({
	counter: counterReducer,
	auth: authReducer,
	bodyParts: bodyPartsReducer
});
