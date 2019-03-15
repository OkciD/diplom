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
import Realm from 'realm';

const AppLogSchema: Realm.ObjectSchema = {
	name: 'AppLog',
	properties: {
		action: 'string',
		date: 'date'
	}
};

interface Props {
}

export default class App extends React.Component<Props> {
	public render(): React.ReactNode {
		return (
			<Provider store={configureStore()}>
				<Counter />
			</Provider>
		);
	}

	public componentDidMount(): void {
		Realm.open({ schema: [AppLogSchema] })
			.then((realm) => {
				realm.write(() => {
					realm.create('AppLog', {
						action: 'open',
						date: new Date() // TODO: timezone
					});
				});

				const foo = realm.objects('AppLog');
				console.warn(foo);
			})
			.catch((error) => {
				console.error(error);
			});
	}
}
