import { combineReducers } from 'redux';
import { counterReducer } from '../counter';
import { bodyPartsReducer } from '../bodyParts';

export default combineReducers({
	counter: counterReducer,
	bodyParts: bodyPartsReducer
});
