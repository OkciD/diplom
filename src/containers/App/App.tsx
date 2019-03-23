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
import AuthForm from '../AuthForm';

interface Props {
}

export default class App extends React.Component<Props> {
	public render(): React.ReactNode {
		return (
			<Provider store={configureStore()}>
				<AuthForm />
			</Provider>
		);
	}
}
