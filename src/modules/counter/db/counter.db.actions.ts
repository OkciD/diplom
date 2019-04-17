import SQLite from 'react-native-sqlite-storage';
import { db } from '../../db';

const noop = () => {};

export function getLastValue(): Promise<number> {
	return new Promise<number>((resolve, reject) => {
		db.transaction(
			(transaction: SQLite.Transaction) => {
				transaction.executeSql(
					'SELECT val as value from counts ORDER BY id DESC LIMIT 1;',
					[],
					(_, resultSet: SQLite.ResultSet) => {
						try {
							// @ts-ignore
							resolve(resultSet.rows.raw()[0].value);
						} catch {
							resolve(0);
						}
					},
					(_, error: SQLite.SQLError) => {
						reject(error);
					}
				);
			},
			noop,
			noop
		);
	});
}

export function insertCount(operation: 'inc' | 'dec', value: number): Promise<number> {
	return new Promise<number>((resolve, reject) => {
		db.transaction(
			(transaction: SQLite.Transaction) => {
				transaction.executeSql(
					`INSERT INTO counts (op, val) values ("${operation}", ${value});`,
					[],
					() => {
						resolve(getLastValue());
					},
					(_, error: SQLite.SQLError) => {
						reject(error);
					}
				);
			},
			noop,
			noop
		);
	});
}

export function reset(): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		db.transaction(
			(transaction: SQLite.Transaction) => {
				transaction.executeSql(
					'DELETE FROM counts',
					[],
					() => {
						resolve();
					},
					(_, error: SQLite.SQLError) => {
						reject(error);
					}
				);
			},
			noop,
			noop
		);
	});
}
