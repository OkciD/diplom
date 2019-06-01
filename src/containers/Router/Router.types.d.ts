import { Router } from 'react-native-easy-router';

export interface RouterProps<RoutingParams = any> {
	router: Router;
	routingParams?: RoutingParams;
}
