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
import { setStackAction } from '../../modules/routing';

interface RoutingElementParams {
	router: ReactNativeEasyRouterObject;
	[paramName: string]: any;
}

interface OwnProps {
	routes: {
		[routeName: string]: ConnectedComponentClass<any, RouterProps>;
	};
	initialRoute: string;
}

interface StoreProps {

}

interface DispatchProps {
	setStack: (stack: RouterStack) => void;
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
		const { initialRoute, setStack } = this.props;

		return (
			<ReactNativeEasyRouter
				routes={this.createRoutes()}
				initialRoute={initialRoute}
				onStackChange={setStack}
			/>
		);
	}
}

function mapStateToProps(): StoreProps {
	return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
	return {
		setStack: (stack: RouterStack) => dispatch(setStackAction({ stack }))
	};
}

export default connect<StoreProps, DispatchProps, any, any>(mapStateToProps, mapDispatchToProps)(Router);
