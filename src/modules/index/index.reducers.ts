import { combineReducers } from 'redux';
import { authReducer } from '../auth';
import { bodyPartsReducer } from '../bodyParts';
import { routingReducer } from '../routing';
import { symptomsReducer } from '../symptoms';

export default combineReducers<any>({
	auth: authReducer,
	bodyParts: bodyPartsReducer,
	routing: routingReducer,
	symptoms: symptomsReducer
});
