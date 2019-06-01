/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../modules/configureStore';
import { closeDb, openDb } from '../../modules/db';
import { SQLError } from 'react-native-sqlite-storage';
import { Alert, BackHandler } from 'react-native';
import { Container } from 'native-base';
import { Router } from '../Router';
import { BodyPartSelector } from '../BodyPartSelector';
import Counter from '../Counter';
import { Header } from '../Header';
import { Router as ReactNativeEasyRouterObject } from 'react-native-easy-router';

interface Props {

}

interface State {
	ready: boolean;
	router?: ReactNativeEasyRouterObject;
}

export default class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = { ready: false };
		console.log('App created');
	}

	public componentWillMount(): void {
		openDb()
			.then<void>(() => {
				console.log('App is ready');
				this.setState({
					ready: true
				});
			})
			.catch<void>((error: SQLError) => {
				Alert.alert(
					'DB opening error',
					error.message,
					[{
						text: 'OK',
						onPress: () => { BackHandler.exitApp(); }
					}]
				);
			});
	}

	public componentWillUnmount(): void {
		closeDb();
	}

	public render(): React.ReactNode {
		const { ready, router } = this.state;

		return (!ready) ? null : ( // TODO: null -> preloader
			<Provider store={configureStore()}>
				<Container>
					<Header router={router!} />
					<Router
						routes={{
							BodyPartSelector,
							Counter,
							SymptomSearch: Counter
						}}
						initialRoute="BodyPartSelector"
						getRouter={(router: ReactNativeEasyRouterObject) => {
							!this.state.router && this.setState({ router });
						}}
					/>
				</Container>
			</Provider>
		);
	}
}
