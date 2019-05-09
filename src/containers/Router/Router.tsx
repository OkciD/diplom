import React from 'react';
import {
	default as ReactNativeEasyRouter,
	RouterProps as ReactNativeEasyRouterProps,
	Router as ReactNativeEasyRouterObject
} from 'react-native-easy-router';
import { ConnectedComponentClass } from 'react-redux';
import { RouterProps } from './';

interface RoutingElementParams {
	router: ReactNativeEasyRouterObject;
	[paramName: string]: any;
}

interface Props {
	routes: {
		[routeName: string]: ConnectedComponentClass<any, RouterProps>;
	};
	initialRoute: string;
}

/**
 * @class Router
 * @description Обёртка над react-native-easy-router, привязающая его к Redux
 * @see https://github.com/sergeyshpadyrev/react-native-easy-router
 */
export default class Router extends React.Component<Props> {
	private createRoutes(): ReactNativeEasyRouterProps['routes'] {
		return Object.entries(this.props.routes)
			.reduce((routes: ReactNativeEasyRouterProps['routes'], [routeName, Component]) => ({
				...routes,
				[routeName]: ({ router, ...params }: RoutingElementParams) => (
					<Component router={router} routingParams={params}/>
				)
			}), {}
		);
	}

	public render(): React.ReactNode {
		return (
			<ReactNativeEasyRouter
				routes={this.createRoutes()}
				initialRoute={this.props.initialRoute}
			/>
		);
	}
}
