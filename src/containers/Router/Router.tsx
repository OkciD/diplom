import React from 'react';
import {
	default as ReactNativeEasyRouter,
	RouterProps as ReactNativeEasyRouterProps,
	Router as ReactNativeEasyRouterObject
} from 'react-native-easy-router';
import Counter from '../Counter';
import { BodyPartSelector } from '../BodyPartSelector';
import { ConnectedComponentClass } from 'react-redux';
import { RouterProps } from './';

interface Components {
	[routeName: string]: ConnectedComponentClass<any, RouterProps>;
}

interface RoutingElementParams {
	router: ReactNativeEasyRouterObject;
	[paramName: string]: any;
}

/**
 * @class Router
 * @description Обёртка над react-native-easy-router, привязающая его к Redux
 * @see https://github.com/sergeyshpadyrev/react-native-easy-router
 */
export default class Router extends React.Component<{}> {
	private readonly initialRoute: string = 'BodyPartSelector';

	private readonly components: Components = {
		BodyPartSelector,
		Counter
	};

	private createRoutes(): ReactNativeEasyRouterProps['routes'] {
		return Object.entries(this.components)
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
				initialRoute={this.initialRoute}
			/>
		);
	}
}
