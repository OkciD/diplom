import { AuthState } from './';

export enum ActionTypes {
	SetField = 'AUTH/SET_FIELD',
	SetError = 'AUTH/SET_ERROR'
}

export const initialState: AuthState = {
	login: '',
	password: ''
};
