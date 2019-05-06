export default interface AuthState {
	login: string;
	password: string;
	error?: string;
}

export interface SetFieldPayload {
	login?: string;
	password?: string;
}

export interface SetErrorPayload {
	error: string;
}