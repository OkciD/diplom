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
import { Platform, Text, View } from 'react-native';
import styles from './App.styles';
import { Provider } from 'react-redux';
import configureStore from '../../modules/configureStore';

const instructions = Platform.select({
	ios: `Press Cmd+R to reload,\n
		Cmd+D or shake for dev menu`,
	android:
		`Double tap R on your keyboard to reload,\n
		Shake or press menu button for dev menu`
});

interface Props {
}

export default class App extends React.Component<Props> {
	public render(): React.ReactNode {
		return (
			<Provider store={configureStore()}>
				<View style={styles.container}>
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.instructions}>To get started, edit App.tsx</Text>
					<Text style={styles.instructions}>{instructions}</Text>
				</View>
			</Provider>
		);
	}
}
