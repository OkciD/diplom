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
import Counter from '../Counter';
import { closeDb, openDb } from '../../modules/db';

interface Props {

}

interface State {
	ready: boolean;
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
			});
	}

	public componentWillUnmount(): void {
		closeDb();
	}

	public render(): React.ReactNode {
		return (!this.state.ready) ? null : (
			<Provider store={configureStore()}>
				<Counter />
			</Provider>
		);
	}
}
