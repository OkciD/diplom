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
import { BodyPartSelector } from '../BodyPartSelector';
import { Container, Content, Header } from 'native-base';
import styles from './App.styles';

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
		return (!this.state.ready) ? null : ( // TODO: null -> preloader
			<Provider store={configureStore()}>
				<Container style={{ flex: 1 }}>
					<Header style={styles.header}/>
					<Content>
						<BodyPartSelector />
					</Content>
				</Container>
			</Provider>
		);
	}
}
