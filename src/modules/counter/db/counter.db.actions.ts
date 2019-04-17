import { Count } from './';
import SQLite from 'react-native-sqlite-storage';
import { db } from '../../db';

export function getCounts(): Promise<Count[]> {
	return new Promise<Count[]>((resolve, reject) => {
		db.transaction(
			(transaction: SQLite.Transaction) => {
				transaction.executeSql(
					'SELECT op as operation, val as value from counts;',
					[],
					(_, resultSet: SQLite.ResultSet) => {
						// @ts-ignore TODO: modify typing
						resolve(resultSet.rows.raw() as Count[]);
					},
					(_, error: SQLite.SQLError) => {
						reject(error);
					}
				);
			},
			(error: SQLite.SQLError) => {
				reject(error);
			}
		);
	});
}
