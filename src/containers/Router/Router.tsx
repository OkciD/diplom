import React from 'react';
import {
	default as ReactNativeEasyRouter,
	RouterProps as ReactNativeEasyRouterProps,
	Router as ReactNativeEasyRouterObject,
	RouterStack
} from 'react-native-easy-router';
import { connect, ConnectedComponentClass } from 'react-redux';
import { RouterProps } from './';
import { Dispatch } from 'redux';
import { routeAction } from '../../modules/routing';

interface RoutingElementParams {
	router: ReactNativeEasyRouterObject;
	[paramName: string]: any;
}

interface OwnProps {
	routes: {
		[routeName: string]: ConnectedComponentClass<any, RouterProps>;
	};
	initialRoute: string;
	getRouter: (router: ReactNativeEasyRouterObject) => void;
}

interface StoreProps {

}

interface DispatchProps {
	route: (stack: RouterStack) => void;
}

type Props = OwnProps & StoreProps & DispatchProps;

/**
 * @class Router
 * @description Обёртка над react-native-easy-router, привязающая его к Redux
 * @see https://github.com/sergeyshpadyrev/react-native-easy-router
 */
class Router extends React.Component<Props> {
	private createRoutes(): ReactNativeEasyRouterProps['routes'] {
		return Object.entries(this.props.routes).reduce(
			(routes: ReactNativeEasyRouterProps['routes'], [routeName, Component]) => ({
				...routes,
				[routeName]: ({ router, ...params }: RoutingElementParams) => (
					<Component router={router} routingParams={params}/>
				)
			}),
			{}
		);
	}

	public render(): React.ReactNode {
		const { initialRoute, route, getRouter } = this.props;

		return (
			<ReactNativeEasyRouter
				routes={this.createRoutes()}
				initialRoute={initialRoute} // TODO: to redux
				onStackChange={route}
				router={getRouter}
			/>
		);
	}
}

function mapStateToProps(): StoreProps {
	return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		route: (stack: RouterStack) => dispatch(routeAction({ stack }))
	};
}

export default connect<StoreProps, DispatchProps, OwnProps, any>(mapStateToProps, mapDispatchToProps)(Router);
