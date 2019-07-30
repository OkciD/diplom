import { RouterStack, Route } from 'react-native-easy-router';

export default interface RoutingState {
	stack: RouterStack;
	currentRoute: Route | null;
}

export interface RoutePayload {
	stack: RouterStack;
}
