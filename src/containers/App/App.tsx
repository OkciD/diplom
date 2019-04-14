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
import SQLite, { SQLError } from 'react-native-sqlite-storage';
import { Alert } from 'react-native';

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
		SQLite.DEBUG(true);
		// SQLite.enablePromise(true);

		// @ts-ignore
		const db: SQLite.SQLiteDatabase = SQLite.openDatabase({
			name: 'counter-db.sqlite3',
			createFromLocation: 1,
			readOnly: true
		}, () => {
			Alert.alert('DB successfully opened');
		}, (e: SQLError) => {
			Alert.alert(`Error while opening DB: ${e.message}`);
		});

		db.transaction((transaction: SQLite.Transaction) => {
			transaction.executeSql(
				'SELECT * FROM counts',
				[],
				(transaction: SQLite.Transaction, resultSet: SQLite.ResultSet) => {
					const temp: string[] = [];
					for (let i = 0; i < resultSet.rows.length; i += 1) {
						temp.push(JSON.stringify(resultSet.rows.item(i)));
					}
					Alert.alert(`Successfull read: ${temp.join(', ')}`);
				}
			);
		});
	}
}
