import SQLite from 'react-native-sqlite-storage';
import { db, executeSql } from '../../db';

const noop = () => {};

export function getLastValue(): Promise<number> {
	return executeSql<{ value: number }>('SELECT val as value from counts ORDER BY id DESC LIMIT 1;')
		.then<number>(([valObj]) => valObj ? valObj.value : 0);
}

export async function insertCount(operation: 'inc' | 'dec', value: number): Promise<number> {
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
