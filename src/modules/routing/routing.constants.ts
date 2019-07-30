import { RoutingState } from './';

export const initialState: RoutingState = {
	stack: [],
	currentRoute: null
};

export enum ActionTypes {
	Route = 'ROUTING/ROUTE'
}
