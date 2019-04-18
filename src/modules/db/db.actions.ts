import SQLite from 'react-native-sqlite-storage';
import { DB_NAME } from './';
import getRandomHash from '../../utils/randomHash';

const log = console.log.bind(console, '[DB module]');
const logError = console.error.bind(console, '[DB module]');

export let db: SQLite.SQLiteDatabase;

/**
 * @module Модуль работы с БД
 *
 * Да, у либы react-native-sqlite-storage есть "промис-режим", но он такой кривой, что при неудачном открытии БД
 * промис не реджектится. Так что приходится "промисифицировать" самостоятельно.
 */

export function openDb(): Promise<void> {
	SQLite.DEBUG(__DEV__); // __DEV__ === true для дев-сборок

	return new Promise<void>((resolve, reject) => {
		db = SQLite.openDatabase(
			// @ts-ignore
			{
				name: DB_NAME,
				createFromLocation: 1,
				readOnly: true
			},
			() => {
				log(`DB "${DB_NAME}" opened`);

				resolve();
			},
			(error: SQLite.SQLError) => {
				logError(`Error while opening DB "${DB_NAME}": ${error.message}`);

				reject(error);
			}
		);
	});
}

export function executeSql<T>(query: string): Promise<T[]> {
	return new Promise<T[]>((resolve, reject) => {
		log('Transaction started');

		db.transaction(
			(transaction: SQLite.Transaction) => {
				const queryId: string = getRandomHash();
				log(`Executing SQL query #${queryId} started: ${query}`);

				transaction.executeSql(
					query,
					[],
					(_, resultSet: SQLite.ResultSet) => {
						// @ts-ignore
						const result: T[] = resultSet.rows.raw();
						log(`Query #${queryId} success: ${JSON.stringify(result)}`);

						resolve(result);
					},
					(_, error: SQLite.SQLError) => {
						logError(`Query #${queryId} error: ${error.message}`);

						reject(error);
					}
				);
			},
			() => { logError('Transaction failed'); },
			() => { log('Transaction finished'); }
		);
	});
}

export function closeDb(): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		db.close(
			() => {
				log(`DB "${DB_NAME}" closed`);

				resolve();
			},
			(error: SQLite.SQLError) => {
				logError(`Error while closing DB "${DB_NAME}": ${error.message}`);

				reject(error);
			}
		);
	});
}
