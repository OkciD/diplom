import SQLite from 'react-native-sqlite-storage';
import { DB_NAME } from './';

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
			() => { resolve(); },
			(error: SQLite.SQLError) => { reject(error); }
		);
	});
}

export function closeDb(): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		db.close(
			() => { resolve(); },
			(error: SQLite.SQLError) => { reject(error); }
		);
	});
}
